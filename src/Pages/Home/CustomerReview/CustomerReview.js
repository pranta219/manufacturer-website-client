import React from 'react';
import bick from '../../../Pictures/img/Bicycle.png'
import review1 from '../../../Pictures/img/review1.jpg'
import review2 from '../../../Pictures/img/review3.jpg'
import review3 from '../../../Pictures/img/review2.jpg'
import Review from './Review';

const CustomerReview = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Oscar Huckle',
            review: " He has been an avid cyclist since his teenage years, initially catching the road cycling bug and riding for a local club.He’s since been indoctrinated into gravel riding and more recently has taken to the dark art of mountain biking."
            ,
            location: 'califonia',
            img: review1
        },
        {
            _id: 2,
            name: 'Jennifer J. Chancy',
            review: "A tip from someone who has worked on many different types of bikes for many years: If you already possess a hitch-mount bike rack (where I live, these are everywhere), *use it* as a repair stand.",
            location: 'califonia',
            img: review2
        },
        {
            _id: 3,
            name: 'Aphoid',
            review: "I have an Ultimate Support bicycle stand from more than a decade ago. The neatest advantage it has is that is has a bracket for mounting a tool tray. They also made a smallish toolbox that would attach to the same ."
            ,
            location: 'califonia',
            img: review3
        },
    ]
    return (
        <section className='mt-20 mb-32'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-4xl text-primary font-bold mx-48">Customer Reviews</h4>
                </div>
                <div >
                    <img className='w-24 lg:w-48' src={bick} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-48'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default CustomerReview;