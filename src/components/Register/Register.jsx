import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import login from '../../assets/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const { createUser, updateUser, loginWithGoogle } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        const from = event.target;

        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;

        createUser(email, password)
            .then(result => {
                updateUser(result.user, name, photo)
                    .then(result => console.log(result.user))
                    .catch(error => console.log(error.message))
            })
            .catch(error => console.log(error.message))

        console.log(email, password, name, photo);
    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => { console.log(result.user); })
            .catch(error => { console.log(error.message); })
    }
    return (
        <div className="hero min-h-screen md:flex bg-base-200">
            <div className='md:w-1/2'>
                <img src={login} alt="" />
            </div>
            <div className="hero-content flex-col md:w-1/2">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>
                                Already an user ?
                                <button className="btn btn-link"><Link to="/login">Login</Link></button>
                            </p>
                        </form>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleLogin} className="btn text-lg justify-center gap-x-2 btn-block normal-case text-black bg-transparent hover:border-gray-300 hover:bg-transparent border-gray-300">
                            <FcGoogle className='w-8 h-8'></FcGoogle> Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;