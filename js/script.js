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
function displayTodos(){
	console.log('My Todos: ', todos);
}
displayTodos();

function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

function changeTodo(position, newValue){
	todos[position] = newValue;
	displayTodos();
}

function deleteTodo(position){
	todos.splice(position,1);
	displayTodos();
}
//----------------------------
//V3 What is an object?
var myComputer = {
	operatingSystem: 'mac',
	screenSize: '15 inches',
	purchaseYear: 2011
};
//access values by using dot notation w property names
myComputer.operatingSystem //outputs 'mac'
myComputer.screenSize//outputs '15 inches'

var gordon = {
	name: 'Gordon',
	sayName: function(){
		console.log(this.name);
	}
}
//method= property that is a function on an object
//V3 Requirements
//It should store the todos array on an object
//It should have a displayTodos method
//It should have a an addTodo method
//It should have a changeTodo method
//It should have a deleteTodo method

var todoList = {
	todos: ['item 1', 'item 2', 'item 3'],
	displayTodos: function (){
		console.log('My todos: ', this.todos);
	},
	addTodos: function(todo){
		this.todos.push(todo);
		this.displayTodos();
	},
	changeTodo: function(position, newValue){
		this.todos[position] = newValue;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position,1);
		this.displayTodos();
	}
};

//V4 Requirements
// todoList.addTodo should add objects
// todoList.changeTodo should change the todoText property
// todoList.toggleCompleted should change the completed property

var todoList = {
	todos: [],
	displayTodos: function (){
		console.log('My todos: ', this.todos);
	},
	addTodos: function(todoText){
		this.todos.push({
			todoText: todoText;//2nd todoText is referring to func parameter
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(position, todoText){
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position,1);
		this.displayTodos();
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	}
};

// V5 Requirements
// .displayTodos should show .todoText
// .displayTodos should tell you if .todos is empty
// .displayTodos should show .completed

var todoList = {
	todos: [],
	displayTodos: function (){
		if (this.todos.length === 0) {
		console.log('Your todo list is empty');	
	}else{
		console.log('My todos: ');
		for(var i = 0; i < this.todos.length; i++){
			if(this.todos[i].completed === true){
				console.log(this.todos[i].todoText);
			}else{
				console.log('( )', this.todos[i].todoText)
			}
			
			}
		}
	},
	addTodos: function(todoText){
		this.todos.push({
			todoText: todoText;//2nd todoText is referring to func parameter
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(position, todoText){
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position,1);
		this.displayTodos();
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	}
};

// V6 Requirements
// .toggleAll: If everything's true, make everything false
// .toggleAll: Otherwise, make everything true

var todoList = {
  todos: [],
  displayTodos: function() {
    if(this.todos.length === 0){
      console.log('Your todo list is empty!');
        } else {
          console.log('My todos: ');
          for(var i = 0; i < this.todos.length; i++) {
              if(this.todos[i].completed === true){
                console.log('(x)', this.todos[i].todoText);
              }else{
                console.log('( )' , this.todos[i].todoText)
              }
          }
        }
  },  
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,//2nd todoText is referring to parameter
      completed:false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    //Get number of completed todos
    for(var i = 0; i<totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }
    }
    //If everything's true, make it false
    if(completedTodos === totalTodos) {
      for(var i = 0; i<totalTodos; i++){
        this.todos[i].completed = false;
      }
      // .toggleAll: Otherwise, make everything true
    }else{
      for(var i = 0; i<totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
    
    this.displayTodos();
  }
};



