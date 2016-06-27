// Load tagged flickr photos using flickr api

$(document).ready(function() {
	
	$(".filter-select").on("click", "button", function(){
		
		$("button").removeClass("selected");
		$(this).addClass("selected");
		
		//define ajax variables
		var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne/?jsoncallback=?";
		var animal = $(this).text();
		var flickrOptions = {
			tags: animal,
			format: "json"
		};
		var displayPhotos = function(data) {
			
			var photoHTML = '<ul>';
			
			//Loop through items array in data object
			$.each(data.items, function(i, photo) {
				photoHTML += '<li class="grid-25 tablet-grid-50">';
				photoHTML += '<a href="' + photo.link + '" class="image">';
				photoHTML += '<img src="' + photo.media.m + '" /></a></li>';
			});
			
			photoHTML += '</ul>';
			$("#photos").html(photoHTML);
			
		};
		
		$.getJSON(flickrAPI, flickrOptions, displayPhotos);
		
		
	}); // end click
	
	
}); // end ready