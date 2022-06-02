import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Pictures/img/icon.png'
import './Navbar.css'
const Navbar = () => {
    const [user] = useAuthState(auth)

    const handleSingOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <div class="navbar bg">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='text-black' to='/home'>Home</Link></li>
                            <li tabindex="0">
                                <Link className='text-black' to='/about'>
                                    My Portfolio

                                </Link>
                            </li>
                            <li><Link className='text-black' to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost normal-case text-xl"><img className='logo w-20 h-15' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li tabindex="0">
                            <Link to='/about'>
                                My Portfolio
                            </Link>
                        </li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    {
                        user && <div className="avatar online placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                <span className="text-1xl btn"> <Link to='/dashboard'>User <br />Active</Link></span>
                            </div>
                        </div>
                    }
                    {
                        user ?
                            <Link onClick={handleSingOut} to='' className='btn'>Sing out</Link>
                            :
                            <Link to="/login" className="btn ">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;