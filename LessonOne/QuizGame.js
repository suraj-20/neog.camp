
const readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("What is your name? \n");

console.log("HELLO " + userName + " WELCOME TO OUR QUIZ GAME :)");

const questionBank = [
    {
        question: `What is my name ? \n`,
        answer: "Suraj"
    },
    {
        question: `What is my favourite chinease food ? 
        a.) Samosa
        b.) Momo
        c.) Bread Pakoda
        d.) Pizza \n`,
        answer: 'b',
    },
    {
        question: `what is my facourite drink ? 
        a.) Cold drink
        b.) Shake \n`,
        answer: "b"
    },
    {
        question: `Whom I love most from ? 
        a.) Papa
        b.) Maa \n`,
        answer: "a",
    },
    {
        question: `What is my hometown name ? 
        a.) Sultanganj
        b.) Asarganj
        c.) Manjura
        d.) Tarapur \n`,
        answer: 'c'
    },
    {
        question: `What is my favourite fruit ? 
        a.) Mango
        b.) Banana
        c.) Pineapple
        d.) Noting or I do'nt know \n`,
        answer: 'd'
    }
]

function play(question, answer) {

    var userAnswer = readlineSync.question(question);

    if (userAnswer === answer) {
        console.log('Right answer');
        score = score + 1;
    } else {
        console.log('Wrong answer');
        score = score;
    }

    console.log("Current Score : ", score);
}

for (var i = 0; i < questionBank.length; i++) {

    var currentQuestion = questionBank[i];

    play(currentQuestion.question, currentQuestion.answer);
}

console.log('YUPPP! YOU SCORED : ', score);

console.log('-------------------');

console.log('Thank you for visiting :)');