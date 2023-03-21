// print your name 5 times

for (var i = 0; i < 5; i++) {

    console.log('Suraj');
}

var n = 5;
var string = "";

for (let i = 1; i <= n; i++) {

    for (let j = 0; j < i; j++) {
        string += "*";
    }
    string += "\n";
}

console.log(string);