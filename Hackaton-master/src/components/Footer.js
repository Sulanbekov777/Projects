import React from 'react'
import './Footer.css'
import { Container } from 'reactstrap'
import { Link, BrowserRouter, useHistory } from 'react-router-dom'

function Footer() {
    const history=useHistory()
    return (
        <div>
            <BrowserRouter>
                <Container>
                    <div className="top-services mt-5">
                        <ul className="footer-specs">
                            <li className="spec">
                                <i className="icon icon-cycle"></i>
                                Opportunity of easy changing (if it is not working)
                            </li>
                            <li className="spec">
                                <i className="icon icon-repair"></i>
                                Free fixing
                            </li>
                            <li className="spec">
                                <i className="icon icon-delivery"></i>
                                Fast and furios (delivery)</li>
                            <li className="spec">
                                <i className="icon icon-wallet"></i>
                                Cash payment
                            </li>
                        </ul>
                    </div>
                    <nav className="footer-menu mt-5">
                        <div className="d-flex justify-content-center"> 
                            <div className="footer-group">
                                <ul>
                                    <h4 className="footer-title">About us</h4>
                                    <li>
                                        <Link onClick = {() => history.replace("/about")}>About us</Link>
                                    </li>
                                    <li>
                                        <Link onClick = {() => history.replace("/confident")}>Rules about confidational information</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-group">
                                <ul>
                                    <h4 className="footer-title">Common</h4>
                                    <li>
                                        <Link  onClick = { () => history.replace("/pay")}>Payment</Link>
                                    </li>
                                    <li>
                                        <Link to="#">The rules of returning and changing</Link>
                                    </li>
                                    <li>
                                        <Link onClick = { () => history.replace("/catalog")}>Catalog</Link>
                                    </li>
                                    <li>
                                        <Link onClick = { () => history.replace("/sale")}>Sales and Promo</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-group">
                                <ul>
                                    <h4 className="footer-title">Category</h4>
                                    <li>
                                        <Link onClick = { () => history.replace("/bmw")}>BMW</Link>
                                    </li>
                                    <li>
                                        <Link onClick = { () => history.replace("/audi")}>Audi</Link>
                                    </li>
                                    <li>
                                        <Link onClick = { () => history.replace("/lamborgini")}>Lamborghini</Link>
                                    </li>
                                    <li>
                                        <Link onClick = { () => history.replace("/soon")}>Bugatti</Link>
                                    </li>
                                    <li>

                        <Link onClick = { () => history.replace("/soon")}>Ferrari</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-group">
                                <ul>
                                    <h4 className="footer-title">Контакты</h4>
                                    <li>
                                        Monday - Saturday
                                    </li>
                                    <li>
                                        Work time: 08:00 - 22:00
                                    </li>
                                    <li>
                                    <Link onClick = { () => history.replace("/contacts")}>Contacts</Link>
                                    </li>
                                    <ul className="footer-social">
                                        <li className="icon-social">
                                            <a href="https://www.facebook.com/"><div className="social-facebook" /></a>
                                        </li>
                                        <li className="icon-social">
                                            <a href="https://twitter.com/?lang=ru"><div className="social-twitter" /></a>
                                        </li>
                                        <li className="icon-social">
                                            <a href="https://www.instagram.com/?hl=ru"><div className="social-instagram" /></a>
                                        </li>
                                        <li className="icon-social">
                                            <a href="https://www.youtube.com/?hl=ru"><div className="social-youtube" /></a>
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </Container>
            </BrowserRouter>
        </div>
    )
}

export default Footer