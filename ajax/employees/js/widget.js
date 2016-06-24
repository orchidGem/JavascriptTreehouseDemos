var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) {
		console.log(typeof xhr.responseText); // The json is a string that we have to parse
		var employees = JSON.parse(xhr.responseText); // parse the json to get the object
		console.log(typeof employees); // now this is an object instead of a string
		console.log(employees);
		
		var statusHtml = '<ul class="bulleted">';
		var status;
		
		// Loop through the employees and create a list item
		for (var i = 0; i < employees.length; i ++) {
			if(employees[i].inoffice === true) {
				status = "in"
			} else {
				status = "out";
			}
			statusHtml += '<li class="' + status + '">';
			statusHtml += employees[i].name;
			statusHtml += '</li>';
		}
		statusHtml += '</ul>';
		document.getElementById("employeeList").innerHTML = statusHtml;
	}
};
xhr.open('GET', 'data/employees.json');
xhr.send();