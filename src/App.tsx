import React from 'react';

function App() {
  // Find the largest subset of unique numbers in an array of numbers.
  const findLargestSubset = (data: number[]) => {
    return Array.from(new Set(data));
  };

  console.log(findLargestSubset([1, 1, 2, 3, 4, 4, 5, 5, 6, 6, 2, 1, 5, 8, 9, 0, 12, 34, 56, 56]));

  // Roman to Integer
  const romanToInt = (s) => {
    const convertor = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
      if (convertor[s[i]] < convertor[s[i + 1]]) {
        result += convertor[s[i + 1]] - convertor[s[i]];
        i = i + 1;
        continue;
      }
      result += convertor[s[i]];
    }

    return result;
  };

  console.log(romanToInt('III'));

  return (
    <div>
      <h2>asd</h2>
    </div>
  );
}

export default App;
