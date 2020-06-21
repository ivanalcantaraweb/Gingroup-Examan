import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import logo from '../media/images/logogingroup.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/"><img src={logo} alt="Logo"></img></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/ejercicio1/">Ejercicio 1</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/ejercicio2/">Ejercicio 2</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

    )
}

export default Header