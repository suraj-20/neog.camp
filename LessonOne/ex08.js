// function to check the answer

var readlineSync = require('readline-sync');

var score = 0;

var questionOne = "What is your name ? ";
var answerOne = "Suraj";

var questionTwo = "What is your age ? ";
var answerTwo = "20";

var questionThree = "Where do you live ? ";
var answerThree = "Gurgaon";

function play(question, answer) {

    var userAnswer = readlineSync.question(question);

    if (userAnswer === answer) {
        console.log("Right answer");
        score = score + 1;
    } else {
        console.log("Wrong answer");
        score = score;
    }

}

play(questionOne, answerOne);
play(questionTwo, answerTwo);
play(questionThree, answerThree);

console.log("Score is : ", score);