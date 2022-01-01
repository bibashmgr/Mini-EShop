import React from 'react';

// components
import { Nav, NavItems, NavItem, NavLogo, NavCart } from './NavbarElements';

const Navbar = () => {
    return (
        <Nav>
            <NavItems>
                <NavItem to='/'>
                    <NavLogo>EShop</NavLogo>
                </NavItem>
                <NavItem to='/cart'>
                    <NavCart></NavCart>
                </NavItem>
            </NavItems>
        </Nav>
    )
}

export default Navbar
