// Add interactivity so the user can manage daily tasks


var taskInput = document.getElementById("new-task"); // new-task
var addButton = document.getElementsByTagName("button")[0]; // first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); // incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); // completed-tasks

//new task element
var createNewTaskElement = function(taskString) {
	var listItem = document.createElement("li");
	var checkbox = document.createElement("input");
	var label = document.createElement("label");
	var editInput = document.createElement("input");
	var editButton = document.createElement("button");
	var deleteButton = document.createElement("button");
	
	//modify elements
	checkbox.type = "checkbox";
	editInput.type = "text";
	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";
	label.innerText = taskString;
	
	// All elements need to be modified and appended
	listItem.appendChild(checkbox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	
	return listItem;
}

// Add a new task
var addTask = function() {
	if(taskInput.value.length > 0) {
		console.log("add task...");
		// Create a new list item with text from new task
		var listItem = createNewTaskElement(taskInput.value);
		//append list item to incompleteTaskHolder	
		incompleteTasksHolder.appendChild(listItem);	
		bindTaskEvents(listItem, taskCompleted);
		
		// clear out value field
		taskInput.value = "";
	}	
}

// Edit an existing task
var editTask = function() {
	console.log("edit task...");

	var listItem = this.parentNode;
	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector("label");	
	
	// See if class of parent is edit mode
	var containsClass = listItem.classList.contains("editMode");
	if(containsClass) {
		// Swith from edit mode
		label.innerText = editInput.value;
		// Make label text become the input's value
	} else {
		editInput.value = label.innerText;
	}
			
	listItem.classList.toggle("editMode");
		// else
			// Switch to edit mode
			// Input value becomes the label's text
			
		// Toggle edit mode
		
}

// Delete an existing task
var deleteTask = function() {
	console.log("delete task...");
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	// Remove parents list item from the ul
	ul.removeChild(listItem);
}

// Mark a task as complete
var taskCompleted = function() {
	console.log("complete task...");
 	// Remove task list item from incomplete tasks
 	var listItem = this.parentNode;
 	// Append task list item to the completed tasks
 	completedTasksHolder.appendChild(listItem);
 	bindTaskEvents(listItem, taskIncomplete);
}

var taskIncomplete = function() {
	console.log("incomplete task...");
	// Mark a task as incomplete
	var listItem = this.parentNode;
	// Append to incomplete tasks
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

// bind list item elements to events
var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log("bind task events...");
	// select list itme's children
	var checkbox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
	
	checkbox.onchange = checkBoxEventHandler;
	editButton.addEventListener("click", editTask);
	deleteButton.addEventListener("click", deleteTask);
		// bind the editTask to edit button
		//bind the deleteTask to the delete button
		//bind checkBoxEventHandler to the checkbox
}


// set the click handler to the addTask function
addButton.addEventListener("click", addTask);

// cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i ++) {
	//bind events to list item's children - taskCompleted()
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted)
}
		
		
		
// cycle over incompleteTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i ++) {
	//bind events to list item's children - taskIncompleted()
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete)
}

