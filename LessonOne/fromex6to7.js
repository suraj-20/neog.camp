// ex06: increment score if the right answer

const readlineSync = require('readline-sync');

var score = 0;

var userAge = readlineSync.question("What is your age?  ");


if (userAge == 18) {
    console.log("Right answer!");
    score = score + 1;
} else {
    console.log("Wrong answer");
    score = score;
}

console.log("Score : ", score);

console.log("--------------------");

// ex07: function to add two numbers

function add(numOne, numTwo) {
    
    var sum = numOne + numTwo;

    return sum;
}

var result = add(25, 30);

console.log("Addition of two number is : ", result);

console.log("--------------------");