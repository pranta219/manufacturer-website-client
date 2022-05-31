import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div class="hero screen bg-base-200 ">
            <div class=" container mx-auto col">
                <div className='max-w-md'>
                    <p className='mb-2'>ROAD RANGE 2022
                    </p>
                    <h1 class="text-6xl font-bold">Vanquish Comp
                        Carbon</h1>
                    <div className='mt-5'>
                        <strike>$2295.90s</strike>
                        <span className='text-primary'> $1195.00</span>
                    </div>
                    <p class="py-6">High modulus carbon frame produces aerodynamic efficiency and stiffness
                        through the use of kammtail shaped tubes.</p>
                    <Link to="/login" className="btn btn-primary">SHOP NOW </Link>
                    <Link to='/product' className="ml-2 btn btn-text btn-outline btn-primary"> EXPLORE PRODUCT</Link>
                </div>
            </div >
        </div >

    );
};

export default Banner;