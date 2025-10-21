import React from 'react';

import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const SignIn = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>

            <div className='text-center space-y-2 mb-5'>
                <h2 className='text-4xl font-bold'> Welcome Back! </h2>
                <p className='text-xl font-semibold'>Login to continue your learning journey!</p>
            </div>

            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div class="card-body">
                    <form>
                        <fieldset class="fieldset">
                            <label class="label">Email</label>
                            <input type="email" class="input" placeholder="Email" />
                            <label class="label">Password</label>
                            <input type="password" class="input" placeholder="Password" />
                            <div><button type='button' class="link link-hover">Forgot password?</button></div>
                            <button class="btn btn-neutral mt-4">Login</button>
                            <div className='flex gap-4 justify-center items-center'>
                                <div className='w-10 h-[2px] bg-gray-200'></div>
                                <div>OR</div>
                                <div className='w-10 h-[2px] bg-gray-200'></div>
                            </div>
                             <button class="btn btn-primary btn-outline mt-4"> <span> <FcGoogle size={24} /> </span> Continue with Google</button>
                        </fieldset>
                    </form>
                    <p> Don't Have an Account ? Please <Link to='/signup' className=' hover:underline text-pink-700 font-semibold'>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;