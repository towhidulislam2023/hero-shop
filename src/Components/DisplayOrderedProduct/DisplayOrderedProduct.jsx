import React from 'react';

const DisplayOrderedProduct = ({ cart, handelRemoveFromCart, }) => {
    const { id, name, picture, quantity ,price}=cart
    return (
        <div>
            <div className='flex items-center gap-4 w-[50%] mx-auto border-4 px-2 py-2 my-4'>
                <img className='h-32 w-32 my-3' src={picture} alt="" />
                <div className='flex-grow'>
                <h1 className='text-xl'>{name}</h1>
                    <p>Price:{price}</p>
                    <p>Quantity:{quantity}</p>
                    <p>Total price: {price * quantity}</p>
                </div>
                <button onClick={() => handelRemoveFromCart(id)} className='btn'>X</button>
            </div>
       
        </div>
    );
};

export default DisplayOrderedProduct;