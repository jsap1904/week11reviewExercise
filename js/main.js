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


var userInput = number( prompt("type in a number 1-10") )

for( var i =userInput; i < 15; i++) {
	console.log(i)

}

