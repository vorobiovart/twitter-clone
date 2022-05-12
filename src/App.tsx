import React from 'react';
import {RatingComponent} from './RatingComponent';
import {Gallery} from './Gallery';

function App() {
  return (
    <div>
      <RatingComponent starsNumber={5} />
      <Gallery />
    </div>
  );
}

export default App;
