import React from 'react';
import hero from '../../assets/hero.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='h-[500px] w-[100%] mx-auto bg-gray-300 pt-12'>
                <h1 className='my-3 text-center text-7xl font-bold text-purple-700'>Welcome To HeroGadget</h1>
                <p className='text-center text-xl my-8 md:w-[600px] mx-auto'>Best E-commerce platform for buying high quality Smart Home Appliances at extremely affordable Price.</p>
                <div className='text-center '>
                    <Link to={"/shop"}><button className="btn font-bold mx-6 border-none px-7 bg-purple-700 hover:bg-purple-800 p-2">Shop Now</button></Link>
                    <Link to={"/about"}> <button className="btn font-bold btn-outline btn-info">Learn More</button></Link>
                </div>

            </div>
            <div className='h-[600px] w-[80%] mx-auto text-center'>
                <img className='mx-auto -mt-40' src={hero} alt="" />

            </div>


        </div>
    );
};

export default Home;