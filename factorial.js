function factorial(num) {
  if (num < 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

const test = factorial(4);
console.log(test);
