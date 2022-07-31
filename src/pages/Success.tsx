import React from 'react'
import Checked from '../Assets/checked.png'
import { Image } from 'react-bootstrap'
import Redirect from '../components/Redirect'
// import { useNavigate} from 'react-router-dom'

type Props = {}

const Success = (props: Props) => {
  return (
    <div>
      <div className="mt-5">
        <Image src={Checked} style={{ height: '100px', width: '100px' }}></Image>
        <p><h1><strong>Order Placed</strong></h1></p>
        <Redirect />


      </div>
    </div>
  )
}

export default Success