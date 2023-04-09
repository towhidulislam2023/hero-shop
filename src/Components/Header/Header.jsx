import React, {  } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon,ChartPieIcon } from '@heroicons/react/24/solid'


const Header = () => {

    
    return (
        <div className=''>
            <div className="navbar w-[80%] mx-auto my-11">
                <div className="flex-1">
                    <h2 className="bg-none text-4xl font-bold flex gap-5 items-center">
                        <ChartPieIcon className='h-9 w-9 text-blue-500'></ChartPieIcon>
                        <span>Hero Shop</span></h2>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-2xl">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/shop"}>Shop</Link></li>
                        <li><Link to={"/order"}><ShoppingCartIcon className="h-6 w-6 text-purple-500" />
                        </Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Header;