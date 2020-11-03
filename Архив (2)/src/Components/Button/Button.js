import React from 'react';



function Button(props) {
    const colorStyle = {
        primery: "blue",
        danger: "red",
        alert: "yellow"
    }
    return (
        <button
            style = {{backgroundColor: colorStyle[props.color]}}
            onClick = {props.onClick}>
            {props.text}</button>
    )
}
export default Button;