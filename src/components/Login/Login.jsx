import React from 'react';
import { FcGoogle } from "react-icons/fc";
import login from '../../assets/login.svg'
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
        const from = event.target;

        const email = from.email.value;
        const password = from.password.value;

        console.log(email, password);
    }
    return (
        <div className="hero min-h-screen md:flex bg-base-200">
            <div className='md:w-1/2'>
                <img src={login} alt="" />
            </div>
            <div className="hero-content flex-col md:w-1/2">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>
                            New Here ?
                            <button className="btn btn-link"><Link to="/register">Register</Link></button>
                        </p>
                        <div className="divider">OR</div>
                        <button className="btn text-lg justify-center gap-x-2 btn-block normal-case text-black bg-transparent hover:border-gray-300 hover:bg-transparent border-gray-300">
                            <FcGoogle className='w-8 h-8'></FcGoogle> Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;