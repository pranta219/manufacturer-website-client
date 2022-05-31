import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    let errorElement
    if (error) {
        errorElement = <div>
            <p className='text-red-800'>Error: {error.message}</p>
        </div>
    }

    if (user) {
        navigate('/home')
    }

    return (
        <div className="flex flex-col w-full lg:flex-row">

            <div className="divider lg:divider-horizontal">OR</div>
            <div className="grid flex-grow h-32 card rounded-box place-items-center">
                {
                    errorElement
                }
                <div>
                    <button onClick={() => signInWithGoogle()} className='text-white w-50 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-700 rounded-md hover:bg-amber-600 focus:outline-none focus:bg-amber-600 bg-amber-500'>Google Sing In</button>

                    <button className='text-white w-50 px-4 py-2 tracking-wide transition-colors duration-200 transform bg-stone-700 rounded-md hover:bg-stone-600 focus:outline-none focus:bg-stone-600 mx-5 bg-stone-900'>GitHub Sing In</button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;