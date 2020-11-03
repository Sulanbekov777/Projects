// import React from 'react';
// import styles from'./Header.module.css'

// function Header(props) {
//     return (
//         <header className={props.className}  >
//             <img style = {{width: '100px'}} src='https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png'></img>
//             <div>
//                 {props.text}
//             </div>
//             <div>
//                 <a href="#">Ссылка куда нибудь </a>
//             </div>
//         </header>
//     )
// }

// export default Header;


// ? REACT APP TODO (Alex)

import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="navbar navbar-dark navbar-expand-lg bg-info">
            <div className="navbar-brand">Todo App</div>
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <NavLink to="/" className="nav-link" >Главная страница</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/about" className="nav-link">Другая страница</NavLink>
                </li>
            </ul>
        </div> 
    )
}

export default Header;





















