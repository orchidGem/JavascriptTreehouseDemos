$(document).ready(function() {
	
	$('form').submit(function(event){
	
		event.preventDefault(); // prevent the form from submitting
		var url = $(this).attr("action"); // get the url the form submits to
		var formData = $(this).serialize(); // serialize gets all field data in the form
		$.post(url, formData, function(response) { // post the data using the jquery post method
			$("#signup").html("<p>Thanks for signing up!</p>");
		});
		
		// post method above can also be rewritten like this: 
		$.ajax(url, {
			data: formData,
			type: "POST",
			success: function(response) {
				$("#signup").html("<p>Thanks for signing up!</p>");
			}
		}); // end ajax
		
		
	}); // end submit
	
	
}); // end ready