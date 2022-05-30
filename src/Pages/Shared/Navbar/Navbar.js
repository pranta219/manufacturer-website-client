import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Pictures/img/icon.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <div class="navbar bg">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a href='/home' className='text-black '>Home</a></li>
                            <li>
                                <a className='text-black '>Reviews</a></li>
                            <li>
                                <a className='text-black '>Chekout</a></li>

                            <li>
                                <a href='/about' className='text-black'>About</a></li>
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost normal-case text-xl"><img className='logo w-20 h-15' src={logo} alt="" /></a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li tabindex="0">
                            <Link to='/about'>
                                About
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul class="p-2 bg-light text-black">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <Link to="/login" class="btn ">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;