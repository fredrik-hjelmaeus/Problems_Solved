// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid?

/*
  In gridsize 2 there is 12 edges and you need 4 choices/steps to reach the goal.
  With Combinatorics you get C(12,4) ~ C(4,2)= 6  
*/

function factorial(num) {
  if (num < 1n) {
    return 1n;
  }
  return num * factorial(num - 1n);
}

const test = factorial(4n) / (factorial(2n) * factorial(2n));
const combinatoricsFormula = factorial(40n) / (factorial(20n) * factorial(20n));

console.log(combinatoricsFormula);
