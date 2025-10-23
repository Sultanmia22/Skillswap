import React, { use } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { Link } from 'react-router';
import { AuthContext } from '../PrivetContent/AuthContext';

const Profile = () => {
    const {user} = use(AuthContext)
    return (
        <div className='py-10'>
            <title>Profile Page</title>
            {/* Profile Title */}
            <div className='text-center'>
                <h1 className='text-4xl font-bold '> My Profile  </h1>
                <p className='text-xl font-semibold my-2'> Manage your account information </p>
            </div>

                <div className='flex flex-col lg:flex-row justify-center' data-aos="zoom-in-up">
                    <div className='bg-linear-65 from-purple-500 to-pink-500 flex flex-col justify-center items-center px-20 py-20'>
                        <div className='p-1 border-2 rounded-full border-gray-800'>
                            <img src={user?.photoURL} alt="" className='w-24 h-24 mx-auto rounded-full' />
                        </div>
                        <div className='font-semibold text-center pt-3'>
                            <h1 className='text-3xl text-white'> {user?.displayName} </h1>
                            <p className='text-white'>{user?.email}</p>
                        </div>
                    </div>

                    <div className='bg-gray-700 p-4 md:p-10 lg:w-[600px]'>
                        <h3 className='text-xl font-bold mb-2 text-white'> Information  </h3>
                        <div className='w-full bg-white h-[1px]'></div>

                         <div className='flex  justify-between'>
                            <div className='my-6 space-y-4'>
                            <div className='space-y-2'>
                                <p className='font-bold text-xl text-white'>Name</p>
                                <p className='text-gray-50 font-semibold'> {user?.displayName}  </p>
                            </div>
                            <div className='space-y-2'>
                                 <p className='font-bold text-xl text-white'>Address</p>
                                <p className='text-gray-50 font-semibold'> Dhaka Bangladesh </p>
                               
                            </div>
                         </div>

                         <div className=' my-6 space-y-4'>
                            <div className='space-y-2'>
                                <p className='font-bold text-xl text-white'> Email </p>
                                <p className='text-gray-50 font-semibold'> {user?.email} </p>
                            </div>
                            <div className='space-y-2'>
                                <p className='font-bold text-xl text-white'> Phone </p>
                                <p className='text-gray-50 font-semibold'>01746931945</p>
                            </div>
                         </div>
                         </div>
                         
                          <div className='w-full bg-white h-[1px]'></div>

                         <div className='flex justify-center py-5'>  <Link to='/updateProfile' className='btn bg-white text-black'> <FaEdit /> Update Profile </Link> </div>
                    </div>
                </div>
        </div>
    );
};

export default Profile;