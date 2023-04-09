import React from 'react';

const ProductCart = ({ product, handelAddToCart }) => {
    const { id, name, price, picture, category }=product
    return (
        <div className='border p-9 rounded-lg'>
            <img className='w-full my-2 rounded-lg mx-auto' src={picture} alt="" />
            <div className="badge badge-warning gap-2 ">{category}</div>
            <h1 className="text-2xl  font-bold">{name}</h1>
            <p className="text-xl "> Price:$ <span className='text-purple-900'>{price}</span></p>
            <button onClick={() => handelAddToCart(id)} className="btn btn-wide font-bold mx-6 border-none mt-6 bg-purple-700 hover:bg-purple-800 p-2">Wide</button>
        </div>
    );
};

export default ProductCart;