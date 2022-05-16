// Find the largest subset of unique numbers in an array of numbers.
export const findLargestSubset = (data: number[]) => {
  return Array.from(new Set(data));
};

// console.log(findLargestSubset([1, 1, 2, 3, 4, 4, 5, 5, 6, 6, 2, 1, 5, 8, 9, 0, 12, 34, 56, 56]));

// Roman to Integer
export const romanToInt = (s) => {
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

const sortCollection = (collection) => {
  return collection.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;

    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;

    return 0;
  });
};

const collection = [
  {name: 'Sarah', age: 19},
  {name: 'Artur', age: 30},
  {name: 'Aba', age: 25},
  {name: 'Brat', age: 29},
  {name: 'Artur', age: 31},
  {name: 'Tom', age: 20},
  {name: 'Brat', age: 29},
  {name: 'Brat', age: 28},
];
console.log(sortCollection(collection));

// Write a function that takes input of arrays and loops over them to calculate return values based on some criteria.
// For example, take this array [['oranges', 1], ['apples', 2], ['grapes', 7]].
// Based on this array return total costs if second array property is a quantity and product is first array item.
// If say Oranges cost $5, and user buys the quantity of 2 or more, apply a 20% discount etc..
// Return total cost from array by adding them all up.

const someWeirdFn = (products, criteria) => {
  const {productName, amountToBuy, price, discount, discountStartsAfterItemsPurchased} = criteria;

  const product = products.find(([name]) => name === productName);
  if (!product) return 'No such product';

  const [_name, amountAvailable] = product;
  if (amountAvailable < amountToBuy) return 'Not enough items';

  if (amountToBuy >= discountStartsAfterItemsPurchased) {
    return amountToBuy * price * (1 - discount);
  }
  return amountToBuy * price;
};

console.log(
  someWeirdFn(
    [
      ['oranges', 1],
      ['apples', 2],
      ['grapes', 7],
    ],
    {productName: 'grapes', amountToBuy: 3, price: 10, discount: 0.2, discountStartsAfterItemsPurchased: 2},
  ),
);

// parenth

var isValid = function (s) {
  const openParenthStack = [];

  const openCloseMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  let isValid = true;

  for (let i = 0; i < s.length; i++) {
    if (i === 0 && !openCloseMap[s[i]]) {
      isValid = false;
      break;
    }

    if (openCloseMap[s[i]]) {
      openParenthStack.push(s[i]);
    } else {
      const openParen = openParenthStack.pop();
      if (openCloseMap[openParen] !== s[i]) {
        isValid = false;
        break;
      }
    }
  }

  if (openParenthStack.length !== 0) return false;

  console.log(openParenthStack);

  return isValid;
};

isValid('{()}');

const removeDuplicates = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }

  return nums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// substring
const longestUniqueSubstring = (string) => {
  let start = 0;
  let end = 0;
  const subSet = new Set();
  let longestSubstr = '';

  while (end < string.length) {
    if (!subSet.has(string[end])) {
      subSet.add(string[end]);
      if (longestSubstr.length < subSet.size) {
        longestSubstr = Array.from(subSet).join('');
      }
      end += 1;
    } else {
      subSet.delete(string[start]);
      start += 1;
    }
  }

  return longestSubstr;
};

longestUniqueSubstring('aaaa');
