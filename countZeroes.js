/*
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

Time Complexity - O (log n)
*/

function countZeroes(arr) {
  const frequencyCount = { 0: 0, 1: 0 };
  arr.map((num) => (frequencyCount[num] ? (frequencyCount[num] += 1) : (frequencyCount[num] = 1)));
  return frequencyCount['0'];
}

countZeroes([1, 1, 1, 1, 0, 0]); // 2
countZeroes([1, 0, 0, 0, 0]); // 4
countZeroes([0, 0, 0]); // 3
countZeroes([1, 1, 1, 1]); // 3
