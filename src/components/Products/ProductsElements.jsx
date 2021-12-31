import styled from "styled-components";

// icons
import { BsCartPlus } from "react-icons/bs";

export const ProductsContainer = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ProductsBox = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    align-items: stretch;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const ProductCard = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 10px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProductImageBox = styled.div`
    width: 250px;
`

export const ProductImage = styled.img`
    width: 100%;
`

export const ProductText = styled.div`
    display: flex;
    flex-direction: column;
    color: #2b2b2b;
`

export const ProductName = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    align-self: center;
`

export const ProductDetails = styled.div`
    font-size: 1rem;
    font-weight: 500;
    align-self: flex-start;
`

export const ProductSpecs = styled.div`
    align-self: flex-start;
`

export const ProductColor = styled.div`
    font-size: 1rem;
    font-weight: 600;
`

export const ProductStorage = styled.div`
    font-size: 1rem;
    font-weight: 600;
`

export const ProductPrice = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: #db2e39;
`

export const ProductButtonBox = styled.div`
    opacity: 0.85;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #2b2b2b;
    border-radius: 5px;
    margin-top: 20px;
    transition: 0.25s all;
    cursor: pointer;
    &:hover {
        background-color: #2b2b2b;
        color: #f2f2f2;
    }
`

export const ProductButton = styled(BsCartPlus)`
    font-size: 1.75rem;
    font-weight: 500;
`