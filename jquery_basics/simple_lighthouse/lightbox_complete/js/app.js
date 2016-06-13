// Problem: User when clicking on image goes to a dead end
// Solution: Create an overly, lightbox, with the large image

// Create overlay element
var $overlay = $('<div id="overlay"></div>'),
	$image = $('<img>')
	$caption = $("<p></p>");
	
// Append image to overlay
$overlay.append($image).append($caption);

// Add overlay to body
$('body').append($overlay);

// Capture the click event on a link to an image
$('#imageGallery a').click(function(event) {
	
	// Prevent default behavior of event
	event.preventDefault(); 
	
	// Define image url and caption
	var imageURL = $(this).attr("href"),
		altCaption = $(this).children("img").attr("alt");
		
	// Set overlay information
	$image.attr('src', imageURL);
	$caption.text(altCaption);
	
	// Show overlay
	$overlay.fadeIn();
});

// When overlay is clicked, hide overlay
$overlay.click(function() {
	$overlay.fadeOut();
})