import React from 'react';
import {Button} from '@material-ui/core';

import s from './TweetBox.module.scss';

export const TweetBox = () => {
  return (
    <div className={s.root}>
      <form className={s.tweetBoxForm}>
        <input className={s.tweetBoxInput} placeholder={'Tweet here'} type={'text'} />
        <input className={s.tweetBoxInput} placeholder={'Enter image URL'} type={'text'} />
        <Button className={s.tweetButton}>Tweet</Button>
      </form>
    </div>
  );
};

TweetBox.displayName = 'TweetBox';
