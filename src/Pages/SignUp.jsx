import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../PrivetContent/AuthContext';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const SignUp = () => {

    const { setUser } = use(AuthContext)

    const { creatUser, updateUserProfile } = use(AuthContext)

    const [showPass, setShowPass] = useState(false)

    const naviaget = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault();

        const displayName = event.target.name.value;
        const photoURL = event.target.photourl.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // console.log(name, photoURL, email, password)

        //! hanle client regular expression 
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error('Password must contain at least 1 uppercase letter, 1 lowercase letter, and be at least 6 characters long');
            return;
        }

        //! Creat Account 
        creatUser(email, password)
            .then(res => {
                const users = res.user;
                setUser(users)
                event.target.reset();
                naviaget('/')
                toast.success('Account Creat Successfull')

                //! Update Profile 
                updateUserProfile(displayName, photoURL)
                    .then(res => {
                        // console.log(res)
                    })
                    .catch(er => {
                        // console.log(er)
                    })

                // console.log(users)
            })
            .catch(er => {
                const error = er.message;
                // console.log(error)
                toast.error(error)
            })
    }

    //! handle Show Pass
    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen' data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500">
            <title>Registrasion Page</title>
            <div className='text-center space-y-2 mb-5'>
                <h2 className='text-4xl font-bold'> Creat Your Account </h2>
                <p className='text-xl font-semibold'>Join SkillSwap Today!</p>
            </div>

            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div class="card-body">
                    <form onSubmit={handleRegister}>
                        <fieldset class="fieldset">
                            {/* NAME */}
                            <label class="label">Name</label>
                            <input type="text" class="input" placeholder="Name" name='name' />

                            {/* PHOTO URL */}
                            <label class="label">Photo URL</label>
                            <input type="text" class="input" placeholder="Photo URL" name='photourl' />

                            {/* EMAIL */}
                            <label class="label">Email</label>
                            <input type="email" class="input" placeholder="Email" name='email' />

                            {/* PASSWORD */}
                            <label class="label">Password</label>
                            <div className='relative'>
                                <input type={showPass ? 'text' : 'password'} class="input" placeholder="Password" name='password' />
                                <button onClick={handleShowPass} className='absolute top-[13px] right-6' type='button'> {showPass ? <FaEyeSlash /> : <FaEye />}  </button>
                            </div>
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