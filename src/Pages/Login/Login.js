import React from 'react';

import { FaGoogle } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

import { useContext } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [errortext, setErrortext] = useState('');
    const { providerLogin } = useContext(Authcontext);
    const { signIn } = useContext(Authcontext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider();

    //for github
    const githubprovider = new GithubAuthProvider();

    const handlegithubeevent = (event) => {
        event.preventDefault();
        providerLogin(githubprovider)
            .then(result => {
                const user = result.user;

                navigate(from, { replace: true })

            })

            .catch(error => console.error(error))
    }


    //function is for google signIn
    const handlegoogleevent = (event) => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;

                navigate(from, { replace: true })

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
                setErrortext('');
                navigate(from, { replace: true });
            })
            .catch(error => {

                console.error(error)
                setErrortext(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">{errortext}</p>
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
                        <div className="form-control mt-6 googlebutton">
                            <button onClick={handlegithubeevent}><GoMarkGithub></GoMarkGithub>signIn with Github</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;