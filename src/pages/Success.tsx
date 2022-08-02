import React from 'react'
import Checked from '../Assets/checked.png'
import { Image } from 'react-bootstrap'
import { useEffect} from 'react'
import Redirect from '../components/Redirect'
import { useNavigate} from 'react-router-dom'


const Success = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    setTimeout(() => {
      navigate('/')
  }, 5000)
  },[])
    
  return (
    <div>
      <div className="mt-5">
        <Image src={Checked} style={{ height: '100px', width: '100px' }}></Image>
        <p><h1><strong>Order Placed Successfully</strong></h1></p>
        <p><h4><strong>You'll be redirected to the home page soon...</strong></h4></p>
      </div>
    </div>
  )
}

export default Success