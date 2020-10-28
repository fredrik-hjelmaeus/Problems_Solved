/*
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

Time Complexity - O (log n)
*/

function sortedFrequency(arr, number) {
  const frequencyCount = {};
  arr.map((num) => (frequencyCount[num] ? (frequencyCount[num] += 1) : (frequencyCount[num] = 1)));
  if (frequencyCount[number]) return frequencyCount[number];
  return -1;
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4); // -1
