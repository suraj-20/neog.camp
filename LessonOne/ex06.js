// increment score if the right answer

var readlineSync = require('readline-sync');

var questionOne = "What is your name ?";
var answerOne = "Suraj";

score = 0;

var userAnswer = readlineSync.question(questionOne);

console.log("Entered answer is " + answerOne);

if (userAnswer === answerOne) {
    console.log("Right");
    score = score + 1; 
}else {
    console.log("Wrong");
    score = score;
}

console.log("Score = " + score)


var questionTwo = "What is your age ?";
var answerTwo = "20";

var userAnswer = readlineSync.question(questionTwo)

if (userAnswer === answerTwo) {
    console.log("Right");
    score = score + 1;
}else {
    console.log("Wrong");
    score = score;
}

console.log ("Score = " + score);