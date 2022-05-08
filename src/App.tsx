import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import classNames from 'classnames';

const QUESTIONS_API_BASE_URL = '/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = '/api/fe/submissions';

const getQuestionsByCategories = (questions) => {
  const questionsByCategories = {};

  questions.forEach((question) => {
    if (questionsByCategories[question.category]) {
      questionsByCategories[question.category].push(question);
    } else {
      questionsByCategories[question.category] = [question];
    }
  });

  return questionsByCategories;
};

const getSubmissionsById = (submissions) => {
  return submissions.reduce((memo, submission) => {
    const {questionId, status} = submission;
    return {
      ...memo,
      [questionId]: status,
    };
  }, {});
};

const getNumberOfCorrectQuestions = (questions, submissionsById) => {
  let correctQuestions = 0;

  questions.forEach(({id}) => {
    if (submissionsById[id] === 'CORRECT') {
      correctQuestions += 1;
    }
  });

  return correctQuestions;
};

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchQuestionsAndSubmissions = async () => {
      const [questionsResponse, submissionsResponse] = await Promise.all([
        fetch(QUESTIONS_API_BASE_URL),
        fetch(SUBMISSIONS_API_BASE_URL),
      ]);
      setQuestions(await questionsResponse.json());
      setSubmissions(await submissionsResponse.json());
    };
    fetchQuestionsAndSubmissions().catch((e) => console.log(e));
  }, []);

  const questionsByCategories = getQuestionsByCategories(questions);
  const submissionsById = getSubmissionsById(submissions);

  return (
    <>
      <h2>Starter App</h2>
      <div className={s.questionsList}>
        {Object.entries(questionsByCategories).length
          ? Object.entries(questionsByCategories).map(([category, questions]) => {
              return (
                <div className={s.category} key={category}>
                  <h2 className={s.categoryTitle}>
                    {category} - {getNumberOfCorrectQuestions(questions, submissionsById)} / {(questions as any).length}
                  </h2>
                  {(questions as any).map((question) => {
                    return (
                      <div className={s.question} key={question.id}>
                        <div
                          className={classNames(s.status, {
                            [s.partiallyCorrect]: submissionsById[question.id] === 'PARTIALLY_CORRECT',
                            [s.incorrect]: submissionsById[question.id] === 'INCORRECT',
                            [s.correct]: submissionsById[question.id] === 'CORRECT',
                          })}
                        />
                        <div>{question.name}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default App;
App.displayName = 'App';
