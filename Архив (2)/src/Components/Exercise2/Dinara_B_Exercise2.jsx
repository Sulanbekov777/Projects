// import React, {useState} from 'react'


// function Exercise2(){
//     return (
//         <div className="exercise">
//             <h1 className="exercise__title">Задание 2</h1>
//             <Pagination from={1} to={10} />
//         </div>
//     )
// }

// // Создать кнопки страниц от указанного числа
// // в пропсе from до props to.
// // При клике на одну из кнопок, надо сменить номер страницы
// // в теге p на соответствующее число

// function Pagination({from, to}) {

//     const [count, setState] = useState(from)

//     function onClick(i){
//         setState(i)
//     }
    
//     const getButtons =()=>{
//         let arr = [];
//         for(let i = from; i <= to; i++){
//             arr.push(<button onClick = {()=>{onClick(i)}} >{i}</button>)
//         }
//         return arr
//     }
//     return (
//         <div>
//             <p>Страница: {count}</p>
//             {getButtons()}

//         </div>
//     )
// }

// export default Exercise2