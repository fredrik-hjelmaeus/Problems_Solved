/* 

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 2^1000?

*/
const sum = 2n ** 1000n;
const sumStr = sum.toString();
let finalSum = 0;
for (let i = 0; i < sumStr.length; i++) {
  finalSum += parseInt(sumStr[i]);
}
console.log(finalSum);
