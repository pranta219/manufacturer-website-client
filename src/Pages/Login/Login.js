import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('')
    const passwordlRef = useRef('')

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordlRef.current.value

        console.log(email, password);
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
                            <input ref={passwordlRef} type="password"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                        </div>
                    </div>
                    <a href="#" className="text-xs text-gray-600 hover:underline">Forget Password?</a>
                    <div className="mt-6">
                        <button type='submit'
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <Link to='/register'
                    className="font-medium text-purple-600 hover:underline">Sign up</Link></p>
            </div>
        </div>
    );
};

export default Login;