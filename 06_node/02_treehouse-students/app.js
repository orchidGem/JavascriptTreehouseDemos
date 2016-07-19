// Problem: we need a simple way to look at a user's badge count and Javascript points
// Solution: use Node.js to connect to treehouse's API to get profile information to print out

var https = require("https"); // define the https module 
var username = "chalkers";

function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript";
	console.log(message);
}
// Connect to the api url (https://teamtreehouse.com/username.json)
var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
	
	var body = "";
	
	console.dir(response.statusCode);
	
	// Read data from the response
	response.on('data', function(chunk) {
		//console.log('BODY: ' + chunk);
		
		/* 
	  Why do we see multiple BODYs in the response? 
	
	  A response is a stream of data. When something is sent over a network like the internet it's not just sent in one go, but in packets of information. Many programming languages wait until all of the data has been transmitted before you can do anything. However, node js uses streams to implement its non blocking features. So your application is free to do other things while it's waiting for data to be transferred.
	
	  We can construct the body by concatenating these chunks together
	  */
		
		// Concatenate chunks from response
		body += chunk;
	}); // end response on
	
	response.on('end', function() {
		console.log(body);
	});
	
	
	// Parse the data
	// Print the data
	
});

// Error handler on request
request.on("error", function(error) {
	console.error(error.message);
});


