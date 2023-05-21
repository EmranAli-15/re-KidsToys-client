import React, { useContext } from 'react';
import { Tooltip } from 'react-tooltip';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => { })
    }
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
                    </ul>
                </div>
                    <Link to="/">
                        <img className='md:h-10 h-6 cursor-pointer' src="https://i.ibb.co/hMVWVZT/logo.png" alt="" />
                    </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-x-6 font-semibold text-gray-500 px-1">
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                    <li><NavLink to="/allToys" className={({ isActive }) => (isActive ? 'active' : '')}>All Toys</NavLink></li>
                    {
                        user && <li><NavLink to="/addToys" className={({ isActive }) => (isActive ? 'active' : '')}>Add Toys</NavLink></li>
                    }
                    {
                        user && <li><NavLink to="/myToys" className={({ isActive }) => (isActive ? 'active' : '')}>My Toys</NavLink></li>
                    }
                    <li><NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : '')}>Blogs</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end gap-x-6">
                <Tooltip className='text-white bg-transparent -mr-4' anchorSelect=".my-anchor-element" place="left">
                    {
                        user && user.displayName
                    }
                </Tooltip>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar -mr-4">
                    {
                        user && <div className="w-10 rounded-full">
                            <a className="my-anchor-element"><img src={user.photoURL} /></a>
                        </div>
                    }
                </label>
                {
                    user ? <button onClick={handleLogout} className="btn my-btn-left text-gray-500 btn-xs">LogOut</button> :
                        <button className="btn my-btn-right btn-xs"><Link to="/login">Login</Link></button>
                }
            </div>

        </div>
    );
};

export default NavBar;