import React, { use, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from '../PrivetContent/AuthContext';
import { toast } from 'react-toastify';

const ForgatePass = () => {

    const {forgoteUserPass} = use(AuthContext)

    const [email,setEmail] = useState('')

    const location = useLocation()
    useEffect(() => {
        if(location.state){
            setEmail(location.state)
        }
    },[])

    

    const handleForgatePass = (event) => {
        event.preventDefault()
        
        const email = event.target.email.value;

        forgoteUserPass(email)
        .then( () => {
            toast.success('Check Your Email for Reset Password')
            setEmail('')
        })
        .catch(er => {
            toast.error(er)
        })
        
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen '>
           <div className='bg-white shadow-md p-10 rounded-lg'>
            <h2 className='text-3xl font-bold mb-5'> Forgote Your Password </h2>
            <form onSubmit={handleForgatePass}>
            <label> Email: </label> <br />
            <input defaultValue={email} type="email" class='input' name='email' />
             <div className='flex justify-center pt-6'>
                 <button className='btn btn-neutral'> Submit </button>
             </div>
           </form>
           </div>
        </div>
    );
};

export default ForgatePass;