// ex12: club info about a superhero together

var mercedes = {
    name: 'mercedes-benz',
    horsepower: "110 to 310 kW",
    seatingcapacity: 4,
    fueltankcapacity: '100L',
    wheelbase: 2729,
}

var lamborghini = {
    name: "lamborghini aventador",
    horsepower: "544 to 566 kW",
    seatingcapacity: 2,
    fueltankcapacity: "85L",
    wheelbase: 2825,
}

console.log(mercedes.horsepower);
console.log("--------------------");
console.log(lamborghini.horsepower);
console.log("--------------------");
console.log(mercedes.horsepower > lamborghini.horsepower);
console.log("--------------------");


var arrayOfCars = [mercedes, lamborghini];

for (var i = 0; i < arrayOfCars.length; i++) {

    var currentCars = arrayOfCars[i];

    console.log(currentCars.name);
    console.log("--------------------");
    console.log(currentCars.seatingcapacity);
    console.log("--------------------");
}
