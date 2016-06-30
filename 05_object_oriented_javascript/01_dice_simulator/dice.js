//Example of object literals - one of a kind objects
var dice = {
	sides : 6,
	roll : function() {
	  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
	  return randomNumber;
	}
}