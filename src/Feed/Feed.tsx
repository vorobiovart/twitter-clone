import React from 'react';
import s from './Feed.module.scss';
import {TweetBox} from './TweetBox';

export const Feed = () => {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <h2>Home</h2>
      </div>
      <TweetBox />
    </div>
  );
};

Feed.displayName = 'Feed';
