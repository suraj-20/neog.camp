// // club info about a superhero together

// var superman = {
//     name: "superman",
//     power: "flight",
//     costumeColor: "blue",
//     strength: 1000,
//     stealth: 0,
//     intelligence: 100,
// }

// var batman = {
//     name: "batman",
//     power: "martail arts",
//     costumeColor: "black",
//     strength: 100,
//     stealth: 100,
//     intelligence: 1000,
// }

// console.log(superman.costumeColor);
// console.log(batman.costumeColor);

// console.log(superman.strength < batman.strength);

// console.log(superman.stealth);
// console.log(batman.stealth);

// console.log(superman.stealth > batman.stealth);



var Superman = {
    name: "Superman",
    costumeColor: "Blue",
    
}

var Spiderman = {
    name: "Spiderman",
    costumeColor: "Red",
    
}

var Ironman = {
    name: "Ironman",
    costumeColor: "Red",
    
}

var Captain = {
    name: "Captain",
    costumeColor: "Red&Blue",
    
}

var arrayOfSuperHeroes = [superman, Ironman, Captain];

for (var i = 0; i < arrayOfSuperHeroes.length; i++) {

    var currentHeroes = arrayOfSuperHeroes[i];

    console.log(currentHeroes.name);
    console.log(currentHeroes.costumeColor);

    console.log('--------');
}