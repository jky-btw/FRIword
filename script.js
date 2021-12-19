import wordList from "./friword.json" assert { type: "json" };

const wordListLength = Object.keys(wordList).length;
const i = Math.floor(Math.random() * wordListLength);
const word = Object.keys(wordList)[i];
const definition = wordList[word];

const splitArray = word.split(new RegExp(/([F|f]r[i|í])/));

$(".left").text(splitArray[0]);
$(".fri").text(splitArray[1].toUpperCase());
$(".right").text(splitArray[2]);
$(".definition").text(definition);

console.log(word);

//console.log(word);
//console.log(definition);
