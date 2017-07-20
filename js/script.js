//To List from watch and code tutorial
/*
V1 Requirements
-it should a place to store todos
-it should have a way to display todos
-it should have a way to add new todos
-it should have a way to change a todo
-it should have a way to delete a todo
*/
var todos = ['item 1', 'item 2', 'item 3', 'item 4'];
console.log(todos);
todos.push('item 5');
todos[0] = 'item 1 updated';
todos.splice(0, 1);
// .splice(position, # of items to delete) removes array elements
// ---------------------------------

// V2 Requirements
// -It should have a function to display todos
// -It should have a function to add todos
// -It should have a function to change todos
// -It should have a function to delete todos

var todos = ['item 1', 'item 2', 'item 3'];
function displayTodos(todos){
	console.log('My Todos: ', todos);
}
displayTodos('Eat Breakfast');
// ----------------------------
function addTodos(todos){
	todos.push(todo);
	displayTodos();
}