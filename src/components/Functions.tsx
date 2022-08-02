import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { removeFromCart, setCart } from '../Actions/cart.actions';


export const Scroll = () => {
    const element = document.getElementById("navHome");
    element.scrollIntoView();
}

export const subTotal = (cart) => {
    let x = 0
    let arr = cart.map(item => item.price * item.orderQty)
    for (let i = 0; i < arr.length; i++) {
        x += arr[i]
    }
    return x;
}
