
const readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("What is your name? \n");

console.log("Hello " + userName + " welcome to our quiz game :) \n");

const quizBank = [
  {
    question: "What is my name? \n",
    answer: "suraj"
  },
  {
    question: `Where do I live? \n
       a: delhi
       b: gurgaon
       c: rajisthan
       d: patodi \n`,
    answer: "b"
  },
  {
    question: `Where did I study? \n
       a: delhi university
       b: gurgaon university
       c: starex university
       d: amity university \n`,
    answer: "c"
  },
  {
    question: `Which course I persuing? \n
       a: B.tech
       b: BA
       c: BBA
       d: BCA \n`,
    answer: "d"
  },
  {
    question: `From where I am learning web development? \n
       a: neog.camp
       b: code Help
       c: coursera
       d: collage wala \n`,
    answer: "a"
  }
]

function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  if (userAnswer == answer) {
    console.log("Right answer :) ");
    score++;
  }
  else {
    console.log("Wrong answer :(");
    score;
  }

  console.log("Currect Score : ", score, "\n");
}

function result() {
  for (var i = 0; i < quizBank.length; i++) {

  var currentQuiz = quizBank[i];

  play(currentQuiz.question, currentQuiz.answer);
}
}

function showScores() {
  console.log('YUPPP! YOU SCORED : ', score);

  console.log('-------------------');

  console.log('Thank you for visiting :)');
}

result();
showScores();