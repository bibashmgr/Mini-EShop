import styled from "styled-components";
import { Link } from "react-router-dom";

// icons
import { BsCart } from 'react-icons/bs';

export const Nav = styled.div`
    background-color: #2b2b2b;
    color: #f2f2f2;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const NavItems = styled.ul`
    list-style: none;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const NavItem = styled(Link)`
    text-decoration: none;
    color: #f2f2f2;
    cursor: pointer;
`
export const NavLogo = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`
export const NavCart = styled(BsCart)`
    font-size: 1.5rem;
    font-weight: 500;
`