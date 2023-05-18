import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar shadow-sm px-4 bg-base-200 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>All Toys</Link></li>
                        <li><Link>Add Toys</Link></li>
                        <li><Link>My Toys</Link></li>
                        <li><Link>Blogs</Link></li>
                    </ul>
                </div>
                <img className='md:h-10 h-6 cursor-pointer' src="https://i.ibb.co/hMVWVZT/logo.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-semibold text-gray-500 px-1">
                    <li><Link>Home</Link></li>
                    <li><Link>All Toys</Link></li>
                    <li><Link to="/addToys">Add Toys</Link></li>
                    <li><Link>My Toys</Link></li>
                    <li><Link>Blogs</Link></li>
                </ul>
            </div>
            <div className="avatar navbar-end">
                <div className="md:w-10 w-8 rounded-full ring ring-primary ring-offset-base-100 cursor-pointer ring-offset-2">
                    <img src="https://i.ibb.co/hMVWVZT/logo.png" />
                </div>
            </div>
        </div>
    );
};

export default NavBar;