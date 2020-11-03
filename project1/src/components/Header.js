import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
          <div className="navbar navbar-dark navbar-expand-lg bg-info">
                <div className="navbar-brand">Todo App</div>
                <ul className="navbar-nav">
                      <li className="navbar-item">
                            <Link className="nav-link" to="/">Главная страница</Link>
                          </li>
                          <li className="navbar-item">
                            <Link className="nav-link" to="/about">Другая траница</Link>
                      </li>
                </ul>
          </div>
    )
}

export default Header;