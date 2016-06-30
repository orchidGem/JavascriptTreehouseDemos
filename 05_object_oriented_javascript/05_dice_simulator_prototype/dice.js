//Example of a Prototype to save memory and storage
 function Dice(sides) {
	 this.sides = sides;
 }
 
 Dice.prototype.roll = function() {
	 var randomNumber = Math.floor(Math.random() * this.sides) + 1;
	 return randomNumber;
 }
 
 var dice = new Dice(10);