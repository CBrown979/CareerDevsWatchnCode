//Version 8 - Getting Data From Inputs
//refactoring - restructuring process of existing code (to make more readable, etc) w/o changing external behavior

var todoList = {
  todos: [],
  displayTodos: function() {
    debugger; //once done with debugger, delete this line from code
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      console.log("My Todos:");
      for (var i=0; i<this.todos.length; i++) {
        if (this.todos[i].completed === true) {
            console.log("(x)".this.todos[i].todoText);
      }     else {
            console.log("( )".todos[i].todoText);
      }
    }
    }
  },
  addTodo: function(todoText) {//this todoText is the name of the property on this object
    this.todos.push({
      todoText: todoText, //this refers to the todoText that is a parameter and can change based on what you pass in when you use the function
      completed: false
    }); //we want our todos to show alittle more data, and want a text description - but also want another property (2 total) to see if the todo has been completed or not
    this.displayTodos();
  },
  changeTodo: function(position, todoText) { //todoText was added to make it clearer that we are changing just the todoText property and not the entire object
    //this.todos[position]=newValue; (this was less clear than above, hence revised to above)
    this.todos[position].todoText=todoText; //used .notation to grab just the todoText property, and once we had that we set it to the new value that is passed in when you run the function
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
      var todo = this.todos[position];//grabbing and saving the specific todo we're interested in
      todo.completed = !todo.completed;//grabbing todo.completed (which is a boolean true/false value), and we want to change the value of it to the opposite of what it is - 1)get todo.completed, put on right side and add the bang operator (!) before it to flip it to opposite of what it currently is     
      this.displayTodos();
  },
  toggleAll: function() { // we're recording the total number of todos and completed todos to see if they are equal
    var totalTodos = this.todos.length;
    var completedTodos=0;
    
    //Get number of completed todos.
    for(var i=0; i<totalTodos; i++) { // using forLoop to count the number of completed todos
      if (this.todos[i].completed === true) { //the if looks at each item in our array
        completedTodos++; 
      }
    }
    
    
    // Case 1: If everything is true, make everything false.
    if (completedTodos === totalTodos) { // we are checking to make sure that everything is true
      // Make everything false.
      for(var i=0; i<totalTodos; i++) { // we're going thru all the items and changing all completed items to false
        this.todos[i].completed=false;
      }
    // Case 2: Otherwise, make everything true.  
    } else {
      for( var i=0; i<totalTodos; i++) {
        this.todos[i].completed=true;
      }
    }
    this.displayTodos();
  }
  
};

// 1) We want to get access to the display todos button via the getElementID
// var displayTodosButton=document.getElementById("displayTodosbutton");
// var toggleAllButton=document.getElementById("toggleAllButton");
// // New refactored code on index.html -- does the same as above but no longer need IDs - using onclick

// 2) We want to run displayTodos method, when someone clicks the display todos button
// displayTodosButton.addEventListener("click", function() {
//   todoList.displayTodos();  
// });

// toggleAllButton.addEventListener("click", function() {
//     todoList.toggleAll();
// });

var handlers = {//we want the methods on this object to handle different events or clicks - when clicked, we want a handler to handle that
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value="";
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo;
    changeTodoPositionInput.value="";
    changeTodoTextInput.value="";
    
  }
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
    todoList.deleteTodo(deleteTodoPositionIntput.valueAsNumber)
    deleteTodoPositionInput.value = "";
  }
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById("toggleCompleted");
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    
  }
};