import React, {useEffect, useState} from 'react';
import s from './App.module.scss';

const QUESTIONS_API_BASE_URL = '/api/fe/questions';

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

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(QUESTIONS_API_BASE_URL);
      setQuestions(await response.json());
    };
    fetchQuestions().catch((e) => console.log(e));
  }, []);

  const questionsByCategories = getQuestionsByCategories(questions);

  return (
    <div>
      <h2>Starter App</h2>
      <div className={s.questionsList}>
        {Object.entries(questionsByCategories).length
          ? Object.entries(questionsByCategories).map(([category, questions]) => {
              return (
                <div className={s.category}>
                  <h2 className={s.categoryTitle}>{category}</h2>
                  {(questions as any).map((question) => (
                    <div className={s.question}>{question.name}</div>
                  ))}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default App;
