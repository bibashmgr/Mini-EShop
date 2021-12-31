import React from 'react';

// components
import { Nav, NavItems, NavItem, NavLogo, NavCart } from './NavbarElements';

const Navbar = () => {
    return (
        <Nav>
            <NavItems>
                <NavItem>
                    <NavLogo>EShop</NavLogo>
                </NavItem>
                <NavItem>
                    <NavCart></NavCart>
                </NavItem>
            </NavItems>
        </Nav>
    )
}

export default Navbar
