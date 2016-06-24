$(document).ready(function() {

	var url = "data/employees.json";
	
	$.getJSON(url, function(response) {
	
		var statusHTML = "<ul class='bulleted'>";
		$.each(response, function(index, employee) {
			if(employee.inoffice === true) {
				status = "in"
			} else {
				status = "out";
			}
			statusHTML += '<li class="' + status + '">';
			statusHTML += employee.name;
			statusHTML += '</li>';
		}); // end each function
		
		statusHTML += '</ul>';
		$("#employeeList").html(statusHTML);
		
	}); // end getJSON
	
}); // end ready