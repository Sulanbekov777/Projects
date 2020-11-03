 
 const API_URL = 'http://localhost:8000';

 //! CARDS SERVER
    
    function getDataCards(){
        fetch(`${API_URL}/cards`)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    document.getElementById("create").addEventListener('click', addNewCard)

    function addNewCard(){

        const card =  JSON.stringify({
            price: document.getElementById("price").value,
            product: document.getElementById("nameOfProduct").value,
            numberInStorage: document.getElementById("numberInStorage").value,
            seller: document.getElementById("seller").value,
            numberOfTelephone: document.getElementById("numberOfTelephone").value,
            images: document.getElementById("images").value,
        })

        fetch(`${API_URL}/cards`, {
            method: 'POST',
            headers:{'Content-type':'application/json'},
            body: card
        })

        .then(response => response.json())
        .then(data => console.log(data))
    }