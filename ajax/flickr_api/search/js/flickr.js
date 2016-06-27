// Load tagged flickr photos using flickr api

$(document).ready(function() {

	$("form").on("submit", function(event){
		event.preventDefault();
		
		var $searchField = $("#search");
		var $submitButton = $("#submit");
		
		//if search field has value
		if( $searchField.val() ) {
		
			//notify user the results are loading
			$searchField.prop("disabled", true);
			$submitButton.prop("disabled", true).val("searching...");
			
			//define ajax variables
			var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne/?jsoncallback=?";
			var animal = $searchField.val()
			var flickrOptions = {
				tags: animal,
				format: "json"
			};
			
			//Flickr Callback function
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
				
				//reenable search form
				$searchField.prop("disabled", false);
				$submitButton.prop("disabled", false).val("submit");
				
			};
			
			$.getJSON(flickrAPI, flickrOptions, displayPhotos);
			
		}		
		
	}); // end submit

}); // end ready