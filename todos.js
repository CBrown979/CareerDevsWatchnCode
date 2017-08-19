//Version 10 - ClickToDelete

var todoList = {
  todos: [],
  addTodo: function(todoText) {//this todoText is the name of the property on this object
    this.todos.push({
      todoText: todoText, //this refers to the todoText that is a parameter and can change based on what you pass in when you use the function
      completed: false
    }); //we want our todos to show alittle more data, and want a text description - but also want another property (2 total) to see if theTodo has been completed or not
  },
  changeTodo: function(position, todoText) { //todoText was added to make it clearer that we are changing just the todoText property and not the entire object
    //this.todos[position]=newValue; (this was less clear than above, hence revised to above)
    this.todos[position].todoText = todoText; //used .notation to grab just the todoText property, and once we had that we set it to the new value that is passed in when you run the function
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
      var todo = this.todos[position];//grabbing and saving the specificTodo we're interested in
      todo.completed = !todo.completed;//grabbing todoDotcompleted (which is a boolean true/false value), and we want to change the value of it to the opposite of what it is - 1)get todo.completed, put on right side and add the bang operator (!) before it to flip it to opposite of what it currently is     
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
      for(var i = 0; i < totalTodos; i++) { // we're going thru all the items and changing all completed items to false
        this.todos[i].completed = false;
      }
    // Case 2: Otherwise, make everything true.  
    } else {
      for( var i=0; i<totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
  
};
var handlers = {//we want the methods on this object to handle different events or clicks - when clicked, we want a handler to handle that
  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value="";
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value="";
    changeTodoTextInput.value="";
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById("toggleCompleted");
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function () {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i]; //the [i] is needed to grab each particular todoFrom the list
      
      var todoTextWithCompletion = '';
      if (todo.completed === true) {
        todoTextWithCompletion = '(x)' + todo.todoText;
      } else {
        todoTextWithCompletion = '( )' + todo.todoText;
      }
      
      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion; // this line will now replace todoLi.textContent=todoList.todos[i].todoText;
            //todoLi.textContent = todoList.todos[i].todoText; //the textContent property on these elements can be changed by setting its value to the todoText property of each todoObject inside todosArray
      todosUl.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
      
      // Comments for above
      //'(x) todoText' - structure of the string we want on the screen - with an '(x)' if completed followed by the todoText
      // to do this, we need to create a new variable to store this, and will change whether the completed property is true or false
      // var todoTextWithCompletion = ''; - initial set to nothing - will change same with an if statement, as follows:
          // if (todoDotcompleted === true)
            // (x) todoText
          // else
            // ( ) todoText
          // todoLi.textContent = todoTextWithCompletion;
    },
    createDeleteButton: function() {
      var deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.className = 'deleteButton';
      return deleteButton;
    },
    setUpEventListeners: function() {
      var todosUl = document.querySelector('ul');
      todosUl.addEventListener('click', function(event) {
      //console.log(event.target.parentNode.id); this console.log was only for demo purposes
      
      //Get the element that was clicked on
      var elementClicked = event.target;
      
      //Check if eventClicked is a delete button
      if (elementClicked.classname === 'deleteButton') {
        //Run handlers.deleteTodo(position)
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
        }
      });  
    }
  };
  
  view.setUpEventListeners(); 
    
