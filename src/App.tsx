import React from 'react';
import {Sidebar} from './Sidebar';

import s from './App.module.scss';

function App() {
  return (
    <div className={s.root}>
      <h1>Twitter Clone!</h1>
      <Sidebar />
    </div>
  );
}

export default App;
