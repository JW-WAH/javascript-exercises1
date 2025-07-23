const palindromes = function (word) {
//break into letters recombine backwards, compare a=b. remove punctuation and spaces at start
let cleanWord = word.replaceAll(" ", "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
let flipWord = cleanWord.split("").reverse().join("")
return flipWord==cleanWord
};


// Do not edit below this line
module.exports = palindromes;
