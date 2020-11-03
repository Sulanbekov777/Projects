$( document ).ready(function() {
  console.log("Test");
  const API_url = "http://localhost:8000"
  function getData(){
    fetch(`${API_URL}/task`)
    .then(resp=>resp.json())
    .then(data=>console.log(data))
  }
  
  // Delete item
  function deleteToDoItem(id){
    fetch('http://localhost:8000',{
      method:"DELETE"
    })
    .then(resp=>resp.json())
    .then(data=>console.log(data))
  }
  
  
  // Post 
  function addNewToDoItem(task){
    const obj = {name, age};
    fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(resp=>resp.json())
    .then(data=>console.log(data))
  }
  
  
  // Edit
  function patch(task){
    const obj = {task};
    fetch(`${API_URL}/task`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(resp=>resp.json())
    .then(data=>console.log(data))
  }

});