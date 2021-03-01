// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");


const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

var word = input.question("Let's play some scrabble! Enter a word: ");
function initialPrompt() {
  scorerPrompt(word)
};

let simpleScore = {'A' : 1, 'B' : 1, 'C' : 1, 'D' : 1, 'E' : 1, 'F' : 1, 'G' : 1, 'H' : 1, 'I' : 1, 'J' : 1, 'K' : 1, 'L' : 1, 'M' : 1, 'N' : 1, 'O' : 1, 'P' : 1, 'Q' : 1, 'R' : 1, 'S' : 1, 'T' : 1, 'U' : 1, 'V' : 1, 'W' : 1, 'X' : 1, 'Y' : 1, 'Z' : 1
};
let vowelBonusScore;
  vowelBonusScore = {'A' : 3, 'B' : 1, 'C' : 1, 'D' : 1, 'E' : 3, 'F' : 1, 'G' : 1, 'H' : 1, 'I' : 3, 'J' : 1, 'K' : 1, 'L' : 1, 'M' : 1, 'N' : 1, 'O' : 3, 'P' : 1, 'Q' : 1, 'R' : 1, 'S' : 1, 'T' : 1, 'U' : 3, 'V' : 1, 'W' : 1, 'X' : 1, 'Y' : 1, 'Z' : 1};
let scrabbleScore;
  scrabbleScore = {'A' : 1, 'B' : 3, '3' : 1, 'D' : 2, 'E' : 1, '4' : 1, 'G' : 2, 'H' : 4, 'I' : 1, 'J' : 8, 'K' : 5, 'L' : 1, 'M' : 3, 'N' : 1, 'O' : 1, 'P' : 4, 'Q' : 10, 'R' : 1, 'S' : 1, 'T' : 1, 'U' : 1, 'V' : 1, 'W' : 4, 'X' : 8, 'Y' : 4, 'Z' : 10};

function scoringAlgorithms() {
  let sum = 0,
  i = 0
  word = word.toUpperCase();
  for (i = 0; i < word.length; i++) {
      sum += simpleScore[word[i]] || 0;
   }
   console.log("Score: " + sum);
};

function scoringAlgorithms1(word) {
  let sum = 0;

  for (i = 0; i < word.length; i++) {
      sum += vowelBonusScore[word[i]] || 0; 
    }
   console.log("Score: " + sum);
};

function scoringAlgorithms2(word) {
  let sum = 0;

  for (i = 0; i < word.length; i++) {
      let letter = word[i];
      sum += scrabbleScore[letter]; 
    }
   console.log("Score: " + sum);
};

function scorerPrompt() {
  word = word.toUpperCase();
  console.log("Which scoring algorithm would you like to use?");
  console.log("0 - Simple: One point per letter");
  console.log("1 - Vowel Bonus: Vowels are worth three points");
  console.log("2 - Scrabble: Traditional scrabble scoring");
  let selection = input.question("Enter 0, 1, or 2: ");
  if (selection == "0") {
    scoringAlgorithms()
  } else if (selection == "1") {
    scoringAlgorithms1(word)
  } else if (selection == "2") {
    scoringAlgorithms2(word)
  } else {

  }
};



function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

