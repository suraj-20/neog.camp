// ex08: function to check the answer

const readlineSync = require('readline-sync');

var score = 0;

var questionOne = "What do I live ? \n";
var answerOne = "gurgoan";

var questionTwo = "How much years do you live in gurgaon? \n";
var answerTwo = "13";

var questionThree = "What is your favourite chinese food? \n";
var answerThree = "momo";

function play(question, answer) {

    var userAnswer = readlineSync.question(question);

    if (answer === userAnswer) {
        console.log("Right answer!");
        score = score + 1;
    } else {
        console.log("Wrong answer!");
        score = score;
    }

}

play(questionOne, answerOne);
play(questionTwo, answerTwo);
play(questionThree, answerThree);

console.log("Score : ", score);

console.log("--------------------")

// ex09: print your name 5 times

for (var i = 1; i <= 5; i++) {

    console.log("Suraj");
}

console.log("--------------------");

// ex10: list grocery items to buy

var groceryList = ['milk', 'butter', 'chease', 'curd', 'salt'];

console.log(groceryList[0]);
console.log(groceryList[2]);
console.log(groceryList[groceryList.length - 1]);

console.log("--------------------");

// ex11: print every item on the list

for (var i = 0; i < groceryList.length; i++) {

    console.log(groceryList[i]);
}

console.log("--------------------");