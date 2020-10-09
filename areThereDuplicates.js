/*
  implement function called areThereDuplicates which accepts a variable number of arguments and check whether there are any duplicates among the arguments passed in.
  You can solve this using frequency pattern or the multiple pointers pattern
*/

function areThereDuplicates() {
  const argumentsArray = [];
  for (var i = 0; i < arguments.length; i++) {
    argumentsArray.push(arguments[i].toString());
  }
  const frequencyCounter = {};
  for (let i of argumentsArray) {
    if (frequencyCounter[i]) {
      return true;
    } else {
      frequencyCounter[i] = true;
    }
  }
  return false;
}

const Qresult1 = areThereDuplicates(1, 2, 3); // false
const Qresult2 = areThereDuplicates(1, 2, 2); // true
const Qresult3 = areThereDuplicates('a', 'b', 'c', 'a'); // true
console.log(Qresult1, Qresult2, Qresult3);
