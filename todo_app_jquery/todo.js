$(function(){

	var todos = [
		{
			task: 'do a jQuery TODO App',
			isCompleted: true
		},
		{
			task: 'Upload to Github',
			isCompleted: false
		}
	];



	var app = { //to namespace our app, and avoid polluting the global namespace
		showTodos: function() {
			var todosListElement = $('#todosList');

			todosListElement.html('');//to clear

			todos.forEach(function(todo){
				var taskClasses =  'todo-task' + (todo.isCompleted ? ' is-completed' : '');
				var deleteButtonClasses = 'delete-button';
				todosListElement.append('\
					<tr>\
						<td class="' + taskClasses + '">' + todo.task + '</td>\
						<td><button class="' + deleteButtonClasses + '">Delete</button></td>\
					</tr>\
					');
			});
		},

		addTodo : function (event){
			event.preventDefault();//to prevent the refresh of the browser

			var createInputTextElement = $('#createInput');
			var createInputTextElementValue = createInputTextElement.val();
			

			if(createInputTextElementValue.length > 0) {
				todos.push({
					task : createInputTextElementValue,
					isCompleted : false
				});
			}
			createInputTextElement.val('');//reset the input to empty
			app.showTodos();//refresh the content
		}, 

		deleteTodo : function(){
			
			todos.splice($(this).closest('tr').index(), 1);	
			app.showTodos();
		},

		toggleTodos: function() {
			
			todos.forEach(function(todo){
				if(todo.task === $(this).text()) {
					todo.isCompleted = !todo.isCompleted;
				}
			}.bind(this));//so we can retrieve the text of the clicked todo

			app.showTodos();
		}
	}

	app.showTodos();
	//on - means binding the click button, even with the newly created element
	//$('.todo-task').on('click', app.toggleTodos);
	$('#todoForm').on('submit', app.addTodo);
	$('table').on('click', '.todo-task' , app.toggleTodos);//bind to toggle, to strikethrough the text
	$('table').on('click', '.delete-button' , app.deleteTodo);//bind to delete button
});