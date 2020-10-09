/* 
Write a function called sameFrequency. Must be complexity O(n)

Given two positive integers, found out if the two numbers have the same frequency of digits.

*/
const sameFrequency = (num1, num2) => {
  // convert num to string
  const numStr1 = num1.toString();
  const numStr2 = num2.toString();
  // check if num is same length
  if (numStr1.length !== numStr2.length) {
    return false;
  }
  // create object to store frequencies
  const numFrequency1 = {};
  const numFrequency2 = {};
  // go trough numstring1 and store num frequencies
  for (let num of numStr1) {
    numFrequency1[num] = (numFrequency1[num] || 0) + 1;
  }
  for (let num of numStr2) {
    numFrequency2[num] = (numFrequency2[num] || 0) + 1;
  }
  // go trough and compare numstring2 and numstring1
  for (let num in numFrequency1) {
    if (numFrequency1[num] !== numFrequency2[num]) {
      return false;
    }
  }
  return true;
};

// solved with frequency pattern
const testOne = sameFrequency(1822, 2281); // true
const testTwo = sameFrequency(34, 14); // false
const testThree = sameFrequency(3589578, 5879385); // true
const testFour = sameFrequency(22, 222); // false
console.log(testOne, testTwo, testThree, testFour);
