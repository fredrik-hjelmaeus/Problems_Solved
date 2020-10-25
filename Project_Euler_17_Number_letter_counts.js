/* 
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. 
For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. 
The use of "and" when writing out numbers is in compliance with British usage.
*/

const words = [];
words.push('');
//
words.push('one');
words.push('two');
words.push('three');
words.push('four');
words.push('five');
words.push('six');
words.push('seven');
words.push('eight');
words.push('nine');
//
words.push('ten');
words.push('eleven');
words.push('twelve');
words.push('thirteen');
words.push('fourteen');
words.push('fifteen');
words.push('sixteen');
words.push('seventeen');
words.push('eighteen');
words.push('nineteen');
//
const tenth = [];

tenth.push('');
tenth.push('');
tenth.push('twenty');
tenth.push('thirty');
tenth.push('forty');
tenth.push('fifty');
tenth.push('sixty');
tenth.push('seventy');
tenth.push('eighty');
tenth.push('ninety');
//
words.push('');
words.push('and');
words.push('thousand');

let word = '';

function makeWord(word) {
  const wordStr = word.toString();
  let createdWord = '';
  if (wordStr.length === 3) {
    let hundredWord = words[parseInt(wordStr[0])] + 'hundredand';
    if (parseInt(wordStr[1]) === 0 && parseInt(wordStr[2]) === 0) {
      hundredWord = words[parseInt(wordStr[0])] + 'hundred';
    }

    createdWord += hundredWord;
  }
  if (wordStr.length >= 2) {
    const tenthWord = tenth[parseInt(wordStr[wordStr.length - 2])];
    createdWord += tenthWord;
  }
  const twodigitword = parseInt(wordStr[wordStr.length - 2] + wordStr[wordStr.length - 1]);

  if (twodigitword > 19 || isNaN(twodigitword)) {
    const singleNum = words[wordStr[wordStr.length - 1]];
    createdWord += singleNum;
  } else {
    const num = words[twodigitword];

    createdWord += num;
  }

  return createdWord;
}
let finalWord = '';
for (i = 1; i <= 999; i++) {
  finalWord += makeWord(i);
}
console.log((finalWord + 'onethousand').length);
