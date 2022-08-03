import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { removeFromCart, setCart } from '../Actions/cart.actions';
import {useLocation, useNavigate} from 'react-router-dom'


export const Scroll = () => {
    
    // if (location.pathname !== '/' ) {
    //     navigate('/')
    // }else{
    window.scrollTo(0, 550);
}

export const scrollBack=()=>{
    window.scrollTo(0, 0);
}

export const subTotal = (cart) => {
    let x = 0
    let arr = cart.map(item => item.price * item.orderQty)
    for (let i = 0; i < arr.length; i++) {
        x += arr[i]
    }
    return x;
}
