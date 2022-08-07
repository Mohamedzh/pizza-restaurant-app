import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { removeFromCart, setCart } from '../Actions/cart.actions';
import {useLocation, useNavigate} from 'react-router-dom'
import {MenuType, OrdersType} from '../types'
import axios from 'axios'
import { addOrder } from '../Actions/order.actions';
import { Dispatch } from 'redux';

export const Scroll = () => {
    window.scrollTo(0, 550);
}

export const scrollBack=()=>{
    window.scrollTo(0, 0);
}

export const subTotal = (cart:MenuType[]) => {
    let x = 0
    let arr = cart.map(item => item.price! * item.orderQty!)
    for (let i = 0; i < arr.length; i++) {
        x += arr[i]
    }
    return x;
}


export const getDate=(order:OrdersType)=>{
    return (Math.round((new Date(Date.now()).getTime() - new Date(order.createdAt).getTime()) / 60000))
}

export const closeOrder: Function = async (id: number, dispatch: Dispatch) => {
    try {
        const response = await axios.patch(`http://localhost:5000/order/${id}`);
        console.log(response.data)
        axios.get(`http://localhost:5000/order`).then((response) => { dispatch(addOrder(response.data.orders)) })
    } catch (e) {
        console.log(e);
    };
}