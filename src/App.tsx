import React from 'react';

function App() {
  // Find the largest subset of unique numbers in an array of numbers.
  const findLargestSubset = (data: number[]) => {
    return Array.from(new Set(data));
  };

  console.log(findLargestSubset([1, 1, 2, 3, 4, 4, 5, 5, 6, 6, 2, 1, 5, 8, 9, 0, 12, 34, 56, 56]));

  return (
    <div>
      <h2>asd</h2>
    </div>
  );
}

export default App;
