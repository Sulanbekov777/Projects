// $( document ).ready(function() {
//   alert ( "ready!" );
// });
const API_url = "http://localhost:8000"

// function getData(){
//   fetch(`${API_url}/users`)
//   .then(resp=>resp.json())
//   .then(data=>console.log(data))
// }

// function deleteToDoItem(id){
//   fetch(`${API_url}/users/${id}`,{
//     method:"DELETE"
//   })
//   .then(resp=>resp.json())
//   .then(data=>console.log(data))
// }

// function addNewToDoItem(name, age){
//   const obj = {name, age};
//   fetch(`${API_url}/users`, {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(obj)
//   })
//   .then(resp=>resp.json())
//   .then(data=>console.log(data))
// }

// getData()




function addTodoItem() {
  var todoItem = $("#new-todo-item").val();
  $("#todo-list").append("<li><input type='checkbox'" + 
                         " name='todo-item-done'" + 
                         " class='todo-item-done'"+ 
                         " value='" + todoItem + "' /> " + 
                         todoItem +
                         " <button class='todo-item-delete'>"+
                         "Delete</button></li>" );
  
 $("#new-todo-item").val("");
}

function deleteTodoItem(e, item) {
  e.preventDefault();
  $(item).parent().fadeOut('slow', function() { 
    $(item).parent().remove();
  });
}

                      
function completeTodoItem() {  
  $(this).parent().toggleClass("strike");
}

$(function() {
   $("#add-todo-item").on('click', function(e){
     e.preventDefault();
     addTodoItem()
   });
  

  $("#todo-list").on('click', '.todo-item-delete', function(e){
    var item = this; 
    deleteTodoItem(e, item)
  })

  $(document).on('click', ".todo-item-done", completeTodoItem)
});



