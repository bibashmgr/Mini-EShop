import styled from "styled-components";

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
    width: 80%;
    display: flex;
    justify-content: space-between;
`
export const NavItem = styled.li`
    list-style: none;
`
export const NavLogo = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
`
export const NavCart = styled(BsCart)`
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
`