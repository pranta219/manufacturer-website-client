import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin/SocialLogin';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/"

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

    if (user) {
        navigate(from, { replace: true })
    }

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }


    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Sent email')
        }
        else {
            toast('please enter your email')
        }
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-purple-800/50 lg:max-w-md">
                <h1 className="text-3xl font-semibold text-center text-purple-700">Login Here🔐</h1>

                <form onSubmit={handleSubmit} className="mt-6">
                    <div>
                        <label for="email" className="block text-sm text-gray-800">Email</label>
                        <input ref={emailRef} type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                    </div>
                    <div className="mt-4">
                        <div>
                            <label for="password" className="block text-sm text-gray-800">Password</label>
                            <input ref={passwordRef} type="password"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                        </div>
                    </div>
                    <a onClick={resetPassword} className="text-xs text-gray-600 hover:underline">Reset Password</a>
                    <div className="mt-6">
                        <button type='submit'
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <Link to='/register'
                    className="font-medium text-purple-600 hover:underline">Sign up</Link></p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;