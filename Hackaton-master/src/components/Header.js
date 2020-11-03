import React, { } from 'react';

import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavbarToggler, NavbarBrand, Form, Button } from 'reactstrap';

import { Navbar } from 'react-bootstrap';
import './Header.css'
import WheelSvg from '../assets/icons/wheel.svg'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Cart from './Cart';
import SearchExample from './Search'

function Header() {
    return (
        <div className="HeaderMainDiv fixed-top">
            <div className="d-flex">
                <NavbarBrand className="HeaderNavbarBrand mt-3" href="/"> <img src={WheelSvg} className="HeaderLogo"></img> Online Cars Shop</NavbarBrand>
                <Sidebar />
            </div>
            <div className = "d-flex">
                {!!localStorage.getItem("token") ? (<Cart />) : (<div></div>)}
                <Navbar>
                    <NavbarToggler aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav">
                        <div className="mr-auto nav">
                        </div>
                        <Form inline>
                            <SearchExample/>
                            {!!localStorage.getItem("token") ? (
                                <Link to="/auth/logout">
                                    <Button className=" mb-4 bg-danger">
                                        Logout
                                    </Button>
                                </Link>
                            ) : (
                                <Link to="/auth/login">
                                    <Button className="bg-danger">
                                        Login
                                    </Button>
                                </Link>
                            )}
                        </Form>
                    </NavbarCollapse>
                </Navbar>
            </div>
        </div>
    )
}

export default Header