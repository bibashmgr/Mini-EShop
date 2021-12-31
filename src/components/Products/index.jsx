import React from 'react';

// components
import { ProductsContainer, ProductsBox, ProductCard, ProductImageBox, ProductImage, ProductText, ProductName,  ProductDetails, ProductSpecs, ProductColor, ProductStorage, ProductPrice, ProductButtonBox, ProductButton } from './ProductsElements';

// data
import { products } from '../../utils/products';

const Products = () => {

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
                                       <ProductPrice>Price : Rs {product.price}</ProductPrice>
                                   </ProductSpecs>
                                   <ProductButtonBox>
                                       <ProductButton />
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
