import React from 'react'
import { Nav } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { GiCakeSlice } from 'react-icons/gi'
import { GiFullPizza } from 'react-icons/gi'
import { BiDrink } from 'react-icons/bi'
import { BsStars } from 'react-icons/bs'
import { GiHamburger } from 'react-icons/gi'
import { useAppSelector } from '../App/hooks'
import { MenuType } from '../types'
import { handleCurrent } from '../components/Functions'
import Menu from '.././components/Menu'



const Home = (): JSX.Element => {
    const menu = useAppSelector(state => state.menu)

    useEffect(() => { setCurrent(menu.filter(item => item.popular === true)) }, [menu])

    const [currentSelection, setCurrent] = useState<MenuType[]>(menu.filter(item => item.popular === true))

    return (
        <div>
            <div id="home" className="mb-3">
                <p style={{ paddingTop: '100px' }}>Luisi's Pizza<br></br>The best Pizza in town</p>
            </div>
            <Nav className="d-flex justify-content-center fw-bold" id="navHome" variant="pills" defaultActiveKey="link-0"
                onSelect={(selectedKey) => {
                    if (selectedKey === "link-1") { handleCurrent(1, menu, setCurrent) }
                    else if (selectedKey === "link-2") { handleCurrent(8, menu, setCurrent) }
                    else if (selectedKey === "link-3") { handleCurrent(6, menu, setCurrent) }
                    else if (selectedKey === "link-4") { handleCurrent(7, menu, setCurrent) } else { handleCurrent(10, menu, setCurrent) }
                }}>
                <Nav.Item>
                    <Nav.Link eventKey="link-0" id="navPopular"><BsStars /> Popular</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"><GiFullPizza /> Pizza</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"><GiHamburger /> Sides</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3"><BiDrink /> Drinks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">
                        <GiCakeSlice /> Dessert</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                <Menu currentSelection={currentSelection} />
            </div>
        </div >
    )
}

export default Home