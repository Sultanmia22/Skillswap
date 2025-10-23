import React, { use, useState } from 'react';

import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../PrivetContent/AuthContext';
import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.int';

const googleProvider = new GoogleAuthProvider()

const SignIn = () => {

    const { signInUser, setUser } = use(AuthContext)

    const navigate = useNavigate()

    const [email, setEmail] = useState(null)

    const location = useLocation()


    //! Handle Sign In 
    const handleSignIn = (event) => {
        event.preventDefault()

        const email = event.target.email.value;

        const password = event.target.password.value;

        // console.log(email, password);

        signInUser(email, password)
            .then(res => {
                const users = res.user;
                setUser(users)
                event.target.reset();
                navigate(location.state || '/');
                toast.success('Login Successfull');
                // console.log(users)
            })
            .catch(er => {
                const error = er.message;
                toast.error(error)
            })



    }

    //! //! Google Sing in  : 

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const users = res.user;
                setUser(users)
                navigate(location.state || '/');
                toast.success('Login Successfull')
            })
            .catch(er => {
                const error = er.message;
                toast.error(error)
            })
    }



    return (
        <div className='flex flex-col justify-center items-center min-h-screen' data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <title>Login Page</title>
            <div className='text-center space-y-2 mb-5'>
                <h2 className='text-4xl font-bold'> Welcome Back! </h2>
                <p className='text-xl font-semibold'>Login to continue your learning journey!</p>
            </div>

            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div class="card-body">
                    <form onSubmit={handleSignIn}>
                        <fieldset class="fieldset">
                            <label class="label">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" class="input" placeholder="Email" name='email' />
                            <label class="label">Password</label>
                            <input type="password" class="input" placeholder="Password" name='password' />
                            <div><Link state={email} to='/forgatepass' type='button' class="link link-hover">Forgot password?</Link></div>
                            <button class="btn btn-neutral mt-4">Login</button>
                            <div className='flex gap-4 justify-center items-center'>
                                <div className='w-10 h-[2px] bg-gray-200'></div>
                                <div>OR</div>
                                <div className='w-10 h-[2px] bg-gray-200'></div>
                            </div>
                            <button type='button' onClick={handleGoogleSignIn} class="btn btn-primary btn-outline mt-4"> <span> <FcGoogle size={24} /> </span> Continue with Google</button>
                        </fieldset>
                    </form>
                    <p> Don't Have an Account ? Please <Link to='/signup' className=' hover:underline text-pink-700 font-semibold'>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;