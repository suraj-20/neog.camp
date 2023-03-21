// ex01: output your name

console.log('Suraj');

console.log('--------------')

// ex02: read the name of your user

var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name?  ");

console.log(userName);

console.log('--------------')

// ex03: welcome your user

console.log('Welcome ' + userName);

console.log('--------------')

// ex04: do it all together

var quizInput = readlineSync.question('Where do I live?  ');

console.log('I live in ' + quizInput + "!");

console.log("--------------------");

// ex05: print right/wrong if greater than 25

var num = readlineSync.question("Enter any number...  ");

if (num > 25) {
    console.log("Right!");
} else {
    console.log("Wrong!");
}

console.log("--------------------");