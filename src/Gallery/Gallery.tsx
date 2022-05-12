import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
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
    <div className={s.root}>
      <div className={s.image}>
        <img src={index === 0 ? images[length - 1] : images[index - 1]} alt="" />
      </div>
      <div className={classNames(s.mainImage, s.image)}>
        <img src={images[index]} alt="" />
      </div>
      <div className={s.image}>
        <img src={index === length - 1 ? images[0] : images[index + 1]} alt="" />
      </div>
    </div>
  );
};
