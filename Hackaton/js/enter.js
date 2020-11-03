const API_URL = 'http://localhost:8000';


    //! USERS SERVER

function getDataUsers(){
fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(data => console.log(data))
}

document.getElementById("button").addEventListener('click', addNewUser)

    function addNewUser(){

        const user =  JSON.stringify({
            name: document.getElementById("usersname").value
        })

        fetch(`${API_URL}/users`, {
            method: 'POST',
            headers:{'Content-type':'application/json'},
            body: user
        })

        .then(response => response.json())
        .then(data => console.log(data))
    }



// // function deleteUser(id){
// //     fetch(`${API_URL}/users/${id}`,{
// //         method: 'DELETE'
// //     })
// //         .then(response => response.json())
// //         .then(data => console.log(data))
// //     }
