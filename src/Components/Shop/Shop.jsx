import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCart from '../ProductCart/ProductCart';
import { addToDb } from '../../../utils/fakedb';

export const CartProductContext=createContext([])
const Shop = () => {
    const products=useLoaderData()
    const [cartProduct,serCartProduct]=useState([]) 
    const handelAddToCart=(id)=>{
        addToDb(id)
        const AlradyAddedProduct = cartProduct.find(pd => pd.id === id)
        
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-10 w-[80%] mx-auto'>
                {
                    products.map(product => <ProductCart key={product.id} product={product} handelAddToCart={handelAddToCart}></ProductCart>)
                }
            </div>
            
        </div>
    );
};

export default Shop;