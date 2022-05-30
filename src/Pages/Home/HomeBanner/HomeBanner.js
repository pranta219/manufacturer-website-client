import React from 'react';
import { Link } from 'react-router-dom';
import homebanner from '../../../Pictures/img/h1-banner.png'
import homebg from '../../../Pictures/img/homebg.jpg'

const HomeBanner = () => {
    return (
        <section style={{
            background: `url(${homebg})`
        }} className='flex justify-center items-center'>
            <div className=''>
                <img className='mt-[-100px]' src={homebanner} alt="" />
            </div>
            <div>
                <p className='text-3xl col ml-10'>
                    "Good selection of bikes and cycling acc
                    and <br /> great service with professional staff. <br />
                    enjoy visiting the store."</p>
                <Link to='/login' className="ml-10 mt-5 btn btn-text btn-outline btn-primary"> JOIN NOW</Link>
            </div>

        </section>
    );
};

export default HomeBanner;