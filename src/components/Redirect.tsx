import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Redirect = (props: Props) => {
    const navigate = useNavigate()
    setTimeout(() => {
        navigate('/')
    }, 5000)
    return (
        <p><h4><strong>You'll be redirected in 4 seconds...</strong></h4></p>

    )
}

export default Redirect