import React from 'react'
import Checked from '../Assets/checked.png'
import { Image } from 'react-bootstrap'
import { useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'


const Success = () => {
  const navigate = useNavigate()
  useEffect(()=>{setTimeout(() => {navigate('/')}, 7000)})
  const orders = useSelector((state: any) => state.orderReducer)

    
  return (
    <div>
      <div className="mt-5">
        <Image src={Checked} style={{ height: '100px', width: '100px' }}></Image>
        <p><h1><strong>Order Placed Successfully</strong></h1></p>
        <p><h4>Your order reference number is <strong>{orders.orderNo}</strong></h4></p>
        <p><h4><strong>You'll be redirected to the home page soon...</strong></h4></p>
      </div>
    </div>
  )
}

export default Success