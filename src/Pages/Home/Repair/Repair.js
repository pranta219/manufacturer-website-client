import React from 'react';
import { Link } from 'react-router-dom';
import './Repair.css'

const Repair = () => {
    return (
        <div className='repair h mt-20' >
            <div class="container mx-auto">
                <div className='max-w-md'>
                    <p className='mb-28 text-black'>.
                    </p>
                    <p className='text-orange-600'>YOUR RIDE START HERE.
                    </p>
                    <h1 class="text-4xl col font-bold mb-5 mt-2">Bike Services & Repair</h1>
                    <div className='flex mb-3'>
                        <div>
                            <div className='flex'>
                                <span className='text-orange-600'>01.</span>
                                <p className='col'>Tunner - up & Builds</p>
                            </div>
                            <p className='text-gray-500'>Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit</p>
                        </div>
                        <div className='ml-6'> <div className='flex'>
                            <span className='text-orange-600'>02.</span>
                            <p className='col'> Adjust and install</p>
                        </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <div className=' flex'>
                            <div>
                                <div className='flex'>
                                    <span className='text-orange-600'>03.</span>
                                    <p className='col'>Personal Bike Fit</p>
                                </div>
                                <p className='text-gray-500'> Adjust and installLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>
                            <div className='ml-6'>
                                <div className='flex'>
                                    <span className='text-orange-600'>04.</span>
                                    <p className='col'> Free Delivery</p>
                                </div>
                                <p className='text-gray-500'> Adjust and install Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/login" className="btn btn-primary mb-5">Explore products</Link>
                </div>
            </div>
        </div >
    );
};

export default Repair;