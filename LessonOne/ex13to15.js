// ex13: put a list of questions together
// ex14: club everything to make the game
// ex15: print the final score to the user

var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("What is your name ? ");

console.log("Welcome " + userName + " DO YOU KNOW Suraj");

var questions = [
    {
        question: "What is your name ? ",
        answer: "Suraj"
    },
    {
        question: "Where do I live ? ",
        answer: "Gurgaon",
    },
    {
        question: "Where do he studies ? ",
        answer: "Starex University",
    }
]

function play(question, answer) {

    var userAnswer = readlineSync.question(question);

    if (answer === userAnswer) {
        console.log('Right');
        score = score + 1;
    } else {
        console.log('Wrong');
    }

    console.log('-------------');
}

for (var i = 0; i < questions.length; i++) {

    var currentQuestion = questions[i];

    play(currentQuestion.question, currentQuestion.answer);

}

console.log("Score : ", score);