// Make interaction of picking a color and drawing on the canvas work

var color = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d");
var $canvas = $("canvas");
var lastEvent;
var mouseDown = false;

// When clicking on control list items
$(".controls").on("click", "li", function() {
	// Deselect sibling elements
	$(this).siblings().removeClass("selected");
	// Select clicked elements
	$(this).addClass("selected");
	// Cache the current color
	color = $(this).css("background-color");
});
	
	
// When new color is pressed
$("#revealColorSelect").click(function() {
	// Show color select or hide the color select
	changeColor();
	$("#colorSelect").toggle();
});

// update the new color span	
function changeColor() {
	r = $("#red").val();
	g = $("#green").val();
	b = $("#blue").val();
	
	color = "rgb(" + r + "," + g + "," + b + ")";
		
	$("#newColor").css("background-color", color);
}
	
// When color sliders change
$("input[type=range]").change(changeColor);

// When add color is pressed
$("#addNewColor").click(function() {
	var $newColor = $("<li></li>");
	var rbg = $("#newColor").css("background-color");
	$newColor.css("background-color", rbg);
	// Append the color to the controls ul
	$(".controls ul").append($newColor);
	// Select the new color
	$newColor.click();
})
		
// On mouse events on the canvas
$canvas.mousedown(function(e) {
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e) {
	// Draw lines
	if(mouseDown) {
		context.beginPath();
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		context.lineTo(e.offsetX, e.offsetY);
		context.strokeStyle = color;
		context.stroke();
		lastEvent = e;
	}
}).mouseup(function(){
	mouseDown = false;
}).mouseleave(function() {
	$canvas.mouseup();
});
	
	
	