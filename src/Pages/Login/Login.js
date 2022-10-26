import React from 'react';

import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import { GoogleAuthProvider } from 'firebase/auth';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const { providerLogin } = useContext(Authcontext);
    const { signIn } = useContext(Authcontext);
    const googleProvider = new GoogleAuthProvider()


    //function is for google signIn
    const handlegoogleevent = (event) => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

            .catch(error => console.error(error))


    }

    //function is for login
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover"> To Create new a account </Link>
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>

                        </div>
                        <div className="form-control mt-6 googlebutton">
                            <button onClick={handlegoogleevent}><FaGoogle></FaGoogle>signIn with Google</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;