import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, getStoredCart, removeFromDb } from '../../../utils/fakedb';
import DisplayOrderedProduct from '../DisplayOrderedProduct/DisplayOrderedProduct';



const Order = () => {
    const products=useLoaderData()
    console.log(products); 
    const [cart,setCart]=useState([])
    const orderedProductid= getStoredCart()
    console.log(orderedProductid);
    const orderedProduct=[]
    for(const id in orderedProductid){
        const orderProducts = products.find(cartproduct=>cartproduct.id===id)
        orderProducts.quantity = orderedProductid[id]
        orderedProduct.push(orderProducts);
        
    }
    useEffect(()=>{
        setCart(orderedProduct)
        
    },[])
    console.log(cart);
    const handelRemoveFromCart=(id)=>{
        const remaining = cart.filter(pd=>pd.id!==id)
        setCart(remaining)

        removeFromDb(id)
    }
    let total=0
    cart.map(cart=>{
        total = total+(cart.price * cart.quantity)
    })
    const handelDelletShoppingCart =()=>{
        deleteShoppingCart()
        setCart([])
    }
    return (
        <div>
            <div>
                {
                    cart.map(cart => <DisplayOrderedProduct key={cart.id} handelRemoveFromCart={handelRemoveFromCart} total={total} cart={cart}></DisplayOrderedProduct>)
                }
            </div>
            <div className='w-[50%] mx-auto text-right'>
                <p className='text-4xl '>
                Total: {total}
                </p>
                <button onClick={handelDelletShoppingCart} className='btn btn-accent mr-4 my-5'>Clear Cart</button>
                <button className='btn btn-warning'>Place Order</button>
            </div>
            

        </div>
    );
};

export default Order;