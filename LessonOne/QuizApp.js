
const readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("What is your name? \n");

console.log("HELLO " + userName + " WELCOME TO OUR QUIZ GAME :) \n");

var quizBank = [
  {
    question: `What was the name of Lakshman's wife? \n
        a: Urvashi
        b: Urmila
        c: Umeshwari
        d: Mandvi \n`,
    answer: 'a'
  },
  {
    question: `Who composed the epic Ramayana?
        a: The sage Vedavyasa
        b: Rishi Vishwamitra
        c: Rishi Valmiki
        d: The sage Brihaspati \n`,
    answer: 'c'
  },
  {
    question: `Which queen of King Dasharatha used to participate in the war with him?
        a: Kaushalya
        b: Mandodari
        c: Kekai
        d: Sumitra \n`,
    answer: 'c'
  },
  {
    question: `What was the name of Bharata's wife?
        a: Shruti Kirti
        b: Mandvi
        c: Tara
        d: Poetry \n`,
    answer: 'b'
  },
  {
    question: `Which aircraft was snatched by Ravana after fighting with Kubera?
        a: Romania
        b: Pushpak
        c: Garuda
        d: Airavat \n`,
    answer: 'b'
  }
]

function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Right answer!");
    score = score + 1;
  } else {
    console.log('Wrong answer!');
    score = score;
  }

  console.log("Current score : ", score);
}

for (var i = 0; i < quizBank.length; i++) {

  var currentQuiz = quizBank[i];

  play(currentQuiz.question, currentQuiz.answer);

}

showScores();

function showScores() {
  console.log('YUPPP! YOU SCORED : ', score);

  console.log('-------------------');

  console.log('Thank you for visiting :)');
}
