import React, {useState} from 'react';

import s from './RaitingComponent.module.scss';

interface RatingComponentProps {
  starsNumber: number;
}

export const RatingComponent: React.FC<RatingComponentProps> = (props) => {
  const [rating, setRating] = useState(undefined);
  const [hover, setHover] = useState(undefined);

  return (
    <div className={s.root}>
      {[...Array(props.starsNumber)].map((_star, index) => (
        <div
          className={s.star}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(undefined)}
          onClick={() => setRating(index)}
        >
          {index <= (hover || rating) ? <span>&#9733;</span> : <span>&#9734;</span>}
        </div>
      ))}
    </div>
  );
};

RatingComponent.displayName = 'RatingComponent';
