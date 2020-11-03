import React, { useState } from 'react'
import cartSvg from '../assets/icons/supermarket.svg'
import {
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardSubtitle,
    CardBody,
    Button,
    Modal,
    Col,
} from 'reactstrap'
import '../components/Header.css'
import { useHistory } from 'react-router-dom'
import Contact from './navbar/contact/Contact'
import { connect } from 'react-redux'

function Cart({ cartItems: info }) {

    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false)
    let total = 0;

    function delData() {
        info = "null"
        setIsOpen(false);
    }
    console.log(info)

    function orderCars() {
        setIsOpen(false)
        history.replace("/contact");
    }

    return ( <
            div className = "Cart" >
            <
            Button className = "cartIconButton"
            onClick = {
                () => setIsOpen(true)
            } > < img className = "cartIcon"
            src = { cartSvg }
            /> Cart</Button >
            <
            div className = "CartsNumberOfProducts" > { info.length } < /div> <
            Modal isOpen = { isOpen } >
            <
            form onSubmit = {
                () => delData()
            } > {
                info.length !== 0 ? ( <
                    div >
                    <
                    Button className = "w-100 btn btn-warning"
                    onClick = {
                        () => setIsOpen(false)
                    } > Close window < /Button> <
                    Contact props = { info }
                    onClick = {
                        () => orderCars()
                    } > Order < /Contact> {
                    info.map((item) => ( <
                        Col key = { item.id } >
                        <
                        Card className = "HomeMainCard mt-4"
                        item = { item } >
                        <
                        CardBody >
                        <
                        CardTitle > < h3 > You have selected { item.title } < /h3></CardTitle >
                        <
                        CardText > Total { total += parseInt(item.price) }
                        $ < /CardText> < /
                        CardBody > <
                        /Card> < /
                        Col >
                    ))
                } <
                /div>
            ): ( < div >
                <
                h4 > You do not have anyting yet < /h4> <
                Button className = "w-100 btn btn-warning"
                onClick = {
                    () => setIsOpen(false)
                } >
                Close window < /Button> < /
                div > )
        } <
        Button className = "w-100 btn btn-danger" > Remove all products from cart < /Button> < /
        form > <
        /Modal> < /
        div >
)
}

const mapStateToProps = state => {
    let { cartItems } = state.CartReducer
    return { cartItems };
}

export default connect(mapStateToProps, null)(Cart)