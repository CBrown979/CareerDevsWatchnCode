//Version 5 - Loops of Logic

// var testArray=["item 1", "item 2", "item 3"];

// for (var i=0; i<testArray.length; i++) {
//     //console.log("Hey");
//     //console.log(i);
//     console.log(testArray[i]);
// }

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log("My Todos:", this.todos);
    //for (var i=0; i<this.todos.length; i++) {
    //example: this.todos.length has 3 items
    //i=0
    //i=1
    //i=2
    //this.todos[i].todoText; -- will look at each item in the array, but want the todoText property on the array
  //}
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
  }
};