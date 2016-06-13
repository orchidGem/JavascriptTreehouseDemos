var person = {
	name : 'sarah',
	country : 'US',
	age : 35,
	treehouseStudent : true,
	skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
	var div = document.getElementById('output');
	div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I have the following skills: ' + person.skills.join(', ') + '</p>';

print(message);