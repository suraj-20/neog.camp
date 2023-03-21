// print right/wrong if greater then 25

var readlineSync = require('readline-sync');

var number = readlineSync.question("Enter any number ? ");

if (number > 25) {

    console.log('Right');
}else {

    console.log("Wrong")
}
