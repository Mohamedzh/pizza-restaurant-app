import React from 'react'
import { MenuType, OrderType, NewOrderObject } from '../types'
import axios from 'axios'
import { Dispatch } from 'redux';
import { addOrders2 } from '../Redux/orders-slice';
import { addToCart, clearCart, decrementCart, incrementCart, setCart } from '../Redux/cart-slice';
import { addNewOrder } from '../Redux/newOrder-slice';

export const scroll = () => {
    window.scrollTo(0, 550);
}

export const scrollBack = () => {
    window.scrollTo(0, 0);
}

export const subTotal = (cart: MenuType[]) => {
    let sum = 0
    let arr = cart.map(item => item.price! * item.orderQty!)
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}


export const getDate = (order: OrderType) => {
    return (Math.round((new Date(Date.now()).getTime() - new Date(order.createdAt!).getTime()) / 60000))
}

export const closeOrder = async (id: number, dispatch: Dispatch) => {
    try {
        const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/order/${id}`);
        axios.get(`${process.env.REACT_APP_BASE_URL}/order`).then((response) => { dispatch(addOrders2(response.data.orders)) })
    } catch (e) {
        console.log(e);
    };
}

export const increment = (id: number, dispatch: Dispatch, menu: MenuType[]) => {
    let selectedItem = menu.find((item) => item?.id === id)
    if (selectedItem) {
        dispatch(incrementCart(selectedItem))
    }
}

export const subCart = (id: number, dispatch: Dispatch, menu: MenuType[]) => {
    let selectedItem = menu.find((item) => item.id === id)
    if (selectedItem) {
        dispatch(decrementCart(selectedItem))
    }
}

export const removeItem = (item: MenuType, dispatch: Dispatch, cart: MenuType[]) => {
    dispatch(setCart(cart.filter((carts) => carts.id !== item.id)));
}

export const addCart = (id: number, dispatch: Dispatch, menu: MenuType[]) => {
    let selectedItem = menu.find((item: MenuType) => item.id === id)
    dispatch(addToCart(selectedItem!))
}

export const handleCurrent = (
    categoryId: number,
    menu: MenuType[],
    setCurrent: React.Dispatch<React.SetStateAction<MenuType[]>>
) => {
    if (categoryId === 1) { setCurrent(menu.filter(item => item.category!.id === 1)) }
    else if (categoryId === 6) { setCurrent(menu.filter(item => item.category!.id === 2)) }
    else if (categoryId === 7) { setCurrent(menu.filter(item => item.category!.id === 3)) }
    else if (categoryId === 8) { setCurrent(menu.filter(item => item.category!.id === 4)) }
    else { setCurrent(menu.filter(item => item.popular === true)) }
}

export const postData = async (dispatch: Dispatch, newOrder: NewOrderObject) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/order`, newOrder);
        dispatch(addNewOrder(response.data.newOrder))
        dispatch(clearCart())
    } catch (e) {
        console.log(e);
    };
}