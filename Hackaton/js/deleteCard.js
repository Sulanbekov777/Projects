
 const API_URL = 'http://localhost:8000';

 function getDataCards(){
    fetch(`${API_URL}/cards/`)
    .then(response => response.json())
    .then(data => console.log(data))
}


 document.getElementById("delete").addEventListener('click', deleteCard)
 function deleteCard(){
 const id = document.getElementById('idOfCard').value
    fetch(`${API_URL}/cards/${id}`,{
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => console.log(data))
    }