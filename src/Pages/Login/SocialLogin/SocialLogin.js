import React from 'react';

const SocialLogin = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row">

            <div className="divider lg:divider-horizontal">OR</div>
            <div className="grid flex-grow h-32 card rounded-box place-items-center">

                <div>
                    <button className='text-white w-50 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-700 rounded-md hover:bg-amber-600 focus:outline-none focus:bg-amber-600 bg-amber-500'>Google Sing In</button>

                    <button className='text-white w-50 px-4 py-2 tracking-wide transition-colors duration-200 transform bg-stone-700 rounded-md hover:bg-stone-600 focus:outline-none focus:bg-stone-600 mx-5 bg-stone-900'>GitHub Sing In</button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;