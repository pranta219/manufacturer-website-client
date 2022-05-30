import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card w-96 bg-black shadow-x1">
            <div class="card-body">
                <p className='col'>{review.review}</p>
                <div class="flex items-center">
                    <div class="avatar online">
                        <div class="w-16 rounded-full">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h4 className="text-xl col">{review.name}</h4>
                        <p className='col'>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;