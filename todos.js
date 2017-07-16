//Version 6 - Thinking in Code

var todoList = {
  todos: [],
  displayTodos: function() {
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