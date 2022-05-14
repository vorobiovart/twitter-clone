import React, {useEffect, useState} from 'react';
import {images} from './images';

import s from './Gallery.module.scss';

// better gallery
// https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

export const Gallery = () => {
  const [index, setIndex] = useState(0);
  const {length} = images;

  useEffect(() => {
    setTimeout(() => {
      if (index === length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3000);
  });

  return (
    <div className={s.viewPort}>
      <div className={s.imagesHolder} style={{transform: `translateX(-${index * 20}%)`}}>
        {images.map((image) => (
          <div className={s.image}>
            <img src={image} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
};
