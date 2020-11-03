const API_URL = 'http://localhost:8000';

function getDataUsers(){
    fetch(`${API_URL}/users`)
        .then(response => response.json())
        .then(data => console.log(data))
}




function getDOMItem(item) {
    let elem = `
        <div class="card1" id="1" style="width: 18rem;">
        <img class="card-img-top" src=${item.images} style="margin-top:30px; margin-bottom:-50px;">
            <div class="card-body" style="margin-top: 50px; background-color: #4e4141; color: #afabd4;">
                <h5 class="card-title">${item.product}</h5>
                <p class="card-text">Система трёх камер (сверхшироко­угольная, широкоугольная и телефото)
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ratione?
                </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Цена за единицу: ${item.price}</li>
                <li class="list-group-item">ID продукта: ${item.id}</li>
                <li class="list-group-item">Количество на складе: ${item.numberInStorage}</li>
                <li class="list-group-item">Продавец ${item.seller}</li>
                <li class="list-group-item">Номер телефона продавца ${item.numberOfTelephone}</li>
            </ul>
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Характеристики
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#"><span>Тип:  </span>Dynamic AMOLED</a>
            <a class="dropdown-item" href="#"><span>Процессор:  </span>2 ядра по 2.7 ГГц (Exynos M5)</a>
            <a class="dropdown-item" href="#"><span>Чипсет:  </span>Samsung Exynos 9 Octa 990</a>
            <a class="dropdown-item" href="#"><span>Обьем ОЗУ:  </span> 8 ГБ</a>
            <a class="dropdown-item" href="#"><span>Зашита:  </span>Corning Gorilla Glass 6</a>
            <a class="dropdown-item" href="#"><span>Разрешение:  </span>1440 x 3200 пикселей</a>
          </div>
            </div>
        </div>
    `
    return  elem
};

function getObj(API_URL){
    return fetch(`${API_URL}/cards`)
    .then(resp => resp.json())
    .then((data) => {
        console.log(data)
        return data.map(item => {
            $(".card_holder").append(getDOMItem(item))
        })
    })
}

getObj(API_URL)
// getObj(API_URL).then(obj => {
//         $(".card_holder").append(getDOMItem(obj[0]))
//         console.log(data)
//     })

// "price": "120",
//   "numberInStorage": "12",
//   "seller": "Oleg",
//   "numberOfTelephone": "0556688977",
//   "images": "https://classroom.google.com/c/MTIwMDY2MjQ0NDgw/m/MTQyMTc2OTU0MTA1/details",
//   "id": 2