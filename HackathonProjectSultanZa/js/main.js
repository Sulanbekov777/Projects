

let taskInput = document.getElementById("new-task"); //new-task
let addButton = document.getElementsByTagName("button")[0]; //first button
let incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
let completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New Task List Item
let createNewTaskElement = function(taskString) {
	//Create List Item
	let listItem = document.createElement("li");
	//label
	let label = document.createElement("label");
	//input (text)
	let editInput = document.createElement("input"); // text
	//button.edit
	let editButton = document.createElement("button");
	//button.delete
	let removeButton = document.createElement("button");

	//Each element needs modifying

	// checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText = "Edit";
	editButton.className = "edit";
	removeButton.innerText = "Remove";
	removeButton.className = "remove";

	label.innerText = taskString;

	//Each element needs appending
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(removeButton);

	return listItem;
}

//Add a new task
let addTask = function() {
	console.log("Add task...");
	//Create a new list item with the text from #new-task:
	let listItem = createNewTaskElement(taskInput.value);
	//Append listItem to incompleteTasksHolder
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
	taskInput.value = "";
}

//Edit an existing task
let editTask = function() {
	console.log("Edit task...");

	let listItem = this.parentNode;

	let editInput = listItem.querySelector("input[type=text");
	let label = listItem.querySelector("label");

	let containsClass = listItem.classList.contains("editMode");

	//if the class of the parent is .editMode
	if (containsClass) {
		//Switch from .editMode
		//label text become the input's value
		label.innerText = editInput.value;
	} else {
		//Switch to .editMode
		//input value becomes the label's text
		editInput.value = label.innerText;
	}

	//Toggle .editMode on the list item
	listItem.classList.toggle("editMode");

}

//Remove an existing task
let removeTask = function() {
	console.log("Remove task...");
	let listItem = this.parentNode;
	let ul = listItem.parentNode;

	//Remove the parent list item from the ul
	ul.removeChild(listItem);
}

//Mark a task as complete
let taskCompleted = function() {
	console.log("Task complete...");
	//Append the task list item to the #completed-tasks
	let listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}

//Mark a task as incomplete
let taskIncomplete = function() {
	console.log("Task incomplete...");
	//Append the task list item to the #incomplete-tasks
	let listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

let bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log("Bind list item events");
	//select taskListItem's children
	// let checkBox = taskListItem.querySelector("input[type=checkbox]");
	let editButton = taskListItem.querySelector("button.edit");
	let removeButton = taskListItem.querySelector("button.remove");

	//bind editTask to edit button
	editButton.onclick = editTask;

	//bind removeTask to remove button
	removeButton.onclick = removeTask;
}

// let ajaxRequest = function() {
// 	console.log("AJAX request");
// }

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
//addButton.addEventListener("click", ajaxRequest);

//cycle over incompleteTasksHolder ul list items
for (let i = 0; i < incompleteTasksHolder.children.length; i++) {
	//bind events to list item's children (taskCompleted)
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}