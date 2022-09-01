import React from 'react'
import Checked from '../Assets/checked.png'
import { Image } from 'react-bootstrap'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../App/hooks'


const Success = () => {
  const navigate = useNavigate()
  useEffect(() => { setTimeout(() => { navigate('/') }, 7000) })
  const currentOrder = useAppSelector((state) => state.newOrder)


  return (
    <div>
      <div className="mt-5" style={{ height: '500px' }}>
        <Image src={Checked} style={{ height: '100px', width: '100px' }}></Image>
        <p><h1><strong>Order Placed Successfully</strong></h1></p>
        <p><h4>Your order reference number is <strong>{currentOrder.orderNo}</strong></h4></p>
        <p><h4><strong>You'll be redirected to the home page soon...</strong></h4></p>
      </div>
    </div>
  )
}

export default Success