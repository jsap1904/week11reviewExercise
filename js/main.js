var honda = { 
	car: "s2000",
	hp: 220,
	year: 2005
	}
var nissan = {
	car:"350z"
	hp: 300,
	year: 2008
}	
var subaru = {
	car: "STI",
	hp: 300,
	year: 2013
}

function vehicles(car, hp, year) {
	this.car = car
	this.hp = hp
	this.year = year
}

var honda = new vehicles("s2000", 220, 2005)
var nissan = new vehicles("350z", 300, 2008)
var subaru = new vehicles("STI", 300, 2013)
//write a function in object that calculates something within the object and displays it
function restaurants (name,seats,bookedseats,seatsOpen) {
	this.name = name
	this.seats = seats
	this.bookedseats = bookedseats
	this.seatsAvailable = function() {
		return seats - bookedseats
	}
	this.seatsOpen = this.seatsAvailable()
}

var burrito = new restaurants("Kanye Asada", 20, 10)
var pizza = new restaurants("Project Pie", 20, 10)
var burger = new restaurants("Super Duper", 20, 10)



console.log(burrito, pizza, burger)

//displaying calculation of 1+2+3+4+5
var userInput = number( prompt("type in a number 1-10") )
var previousNum = previousNum + i

for( var i =userInput; i < 15; i++) {
	previousNum = previousNum + i
	console.log(previousNum)

}
//multiplication table
for( var i = 1; i <=12 ; i++) {
	for (var k = 1; k <= 12; k++) {
		console.log(i*k)
	}
 }

var num = 1.2

console.log(Math.ceil(num)) //brings # up
console.log(Math.floor(num)) // bring # down
console.log(Math.round(num)) //rounds to nearest whole number
console.log(Math.random() * 2) // will give you either 1 or 0 always