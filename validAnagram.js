const validAnagram = (stringOne, stringTwo) => {
  if (stringOne.length !== stringTwo.length) {
    return false;
  }
  const string1counter = {};
  const string2counter = {};

  for (let i of stringOne) {
    string1counter[i] = (string1counter[i] || 0) + 1;
  }
  for (let i of stringTwo) {
    string2counter[i] = (string2counter[i] || 0) + 1;
  }
  for (let i in string1counter) {
    if (string1counter[i] !== string2counter[i]) {
      return false;
    }
  }
  return true;
};

const fOne = validAnagram('', ''); // true
const fTwo = validAnagram('aaz', 'zza'); // false
const fThree = validAnagram('anagram', 'nagaram'); // true
const fFour = validAnagram('rat', 'car'); // false
const fFive = validAnagram('awesome', 'awesom'); // false
const fSix = validAnagram('qwerty', 'qeywrt'); // true

console.log(fOne, fTwo, fThree, fFour, fFive, fSix);
