import React from 'react'
import { Button, Badge } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../App/hooks'
import { MenuType } from '../types'
import { increment, subCart } from './functions'


type Props = {
    food: MenuType
}

function QtyButtons({ food }: Props) {
    const dispatch = useDispatch()
    const menu = useAppSelector(state => state.menu)

    return (
        <div>
            <span>
                <Button size="sm" variant="light" onClick={() => increment(food.id!, dispatch, menu)}><AiOutlinePlus /></Button>
                <Badge className="mx-2" bg="secondary">{food.orderQty}</Badge>
                <Button size="sm" variant="light" onClick={() => subCart(food.id!, dispatch, menu)}><AiOutlineMinus /></Button>
            </span>
        </div >
    )
}

export default QtyButtons