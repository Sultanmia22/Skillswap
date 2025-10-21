import React from 'react';
import { Link } from 'react-router';

const SignUp = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='text-center space-y-2 mb-5'>
                <h2 className='text-4xl font-bold'> Creat Your Account </h2>
                <p className='text-xl font-semibold'>Join SkillSwap Today!</p>
            </div>

            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div class="card-body">
                   <form>
                     <fieldset class="fieldset">
                        {/* NAME */}
                         <label class="label">Name</label>
                        <input type="email" class="input" placeholder="Name" />

                        {/* PHOTO URL */}
                         <label class="label">Photo URL</label>
                        <input type="text" class="input" placeholder="Photo URL" />

                        {/* EMAIL */}
                        <label class="label">Email</label>
                        <input type="email" class="input" placeholder="Email" />

                         {/* PASSWORD */}
                        <label class="label">Password</label>
                        <input type="password" class="input" placeholder="Password" />
                        {/* <div><a class="link link-hover">Forgot password?</a></div> */}
                        <button class="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                   </form>
                   <p> Already Have an Account ? Please <Link to='/login' className='font-semibold text-pink-700 hover:underline'> Login </Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;