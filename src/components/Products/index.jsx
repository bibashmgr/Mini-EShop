import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

// elements
import { ProductsContainer, ProductsBox, ProductCard, ProductImageBox, ProductImage, ProductText, ProductName,  ProductDetails, ProductSpecs, ProductColor, ProductStorage, ProductPrice, ProductButtonBox, ProductButton, AddedText } from './ProductsElements';

// data
import { products } from '../../utils/products';

// actions
import { addProduct } from '../../features/Products/productsSlice';

const Products = () => {

    const items = useSelector((state) => state.products.value);
    const dispatch = useDispatch();

    return (
        <ProductsContainer>
            <ProductsBox>
                {
                    products.map((product) => {
                       return (
                           <ProductCard key={product.id}>
                               <ProductImageBox>
                                   <ProductImage src={product.images} alt={product.name} />
                               </ProductImageBox>
                               <ProductText>
                                   <ProductName>{product.name}</ProductName>
                                   <ProductDetails>
                                       {product.description}
                                   </ProductDetails>
                                   <ProductSpecs>
                                       <ProductColor>Color : {product.specs.color}</ProductColor>
                                       <ProductStorage>Storage : {product.specs.internalStorage}</ProductStorage>
                                       <ProductPrice>Price : NRs. {product.price}</ProductPrice>
                                   </ProductSpecs>
                                   <ProductButtonBox style={{
                                       pointerEvents: items.find(element => element.id === product.id) ? 'none' : 'all'
                                   }} onClick={() => {
                                        dispatch(addProduct(product));
                                    }}>
                                        {
                                            items.find(element => element.id === product.id) ?  <AddedText>Add to Cart</AddedText> : <ProductButton />
                                        }
                                   </ProductButtonBox>
                               </ProductText>
                           </ProductCard>  
                       )
                   }) 
                }
            </ProductsBox>
        </ProductsContainer>    
    )
}

export default Products
