/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/
function factorial(num, memo = []) {
  if (memo[num] !== undefined) return memo[num];
  if (num < 2n) {
    return 1n;
  }

  const result = BigInt(num * factorial(num - 1n, memo));
  memo[num] = result;
  return result;
}

const factorize = factorial(100n);

let sum = 0;
const finalSum = factorize.toString();
for (let d = 0; d < finalSum.length; d++) {
  sum += parseFloat(finalSum[d]);
}
console.log(sum);
