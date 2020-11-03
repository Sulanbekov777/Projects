 
 const API_URL = 'http://localhost:8000';

 //! CARDS SERVER
    
    function getDataCards(){
        fetch(`${API_URL}/cards`)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    
    document.getElementById("edit").addEventListener('click', editCard)

    function editCard(){
        const price = document.getElementById("price").value
        const numberInStorage = document.getElementById("numberInStorage").value
        const seller = document.getElementById("seller").value
        const numberOfTelephone = document.getElementById("numberOfTelephone").value
        const images = document.getElementById("images").value
        const id = document.getElementById("idOfProduct").value
        
        const card =  JSON.stringify({
            price: price,
            numberInStorage: numberInStorage, 
            seller: seller,
            numberOfTelephone: numberOfTelephone,
            images: images
        })

        fetch(`${API_URL}/cards/${id}`, {
            method: 'PATCH',
            headers:{'Content-type':'application/json'},
            body: card
        })

        .then(response => response.json())
        .then(data => console.log(data))
    }