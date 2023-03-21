// welcome your user

var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I know your name? ');

console.log(userName);

var welcomeMessage = "Welcome" + " " + userName;

console.log(welcomeMessage);