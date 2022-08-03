import { Navbar, Container, Nav, NavDropdown, Image, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollBack } from '../components/Functions'
import fork from '../Assets/fork.png'
import {FaArrowUp} from 'react-icons/fa'


const Footer = (): JSX.Element => {
    let location = useLocation();
    const navigate = useNavigate()
    console.log(location)

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/"><Navbar.Brand className="fw-bold fs-6" >
                    Luisi's Pizza <Image id="footerImage" src={fork} ></Image>
                </Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link id="footerBtn"><h6>© 2022 Luisi All Rights Reserved</h6></Nav.Link>
                        <Nav.Link onClick={scrollBack}><h6><FaArrowUp/> Back to top</h6></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Footer