import React from 'react';
import { MdEdit } from 'react-icons/md';
import { Link } from 'react-router';

const Profile = () => {
    return (
        <div className='py-10'>
            <title>Profile Page</title>
            {/* Profile Title */}
            <div className='text-center'>
                <h1 className='text-4xl font-bold '> My Profile  </h1>
                <p className='text-xl font-semibold my-2'> Manage your account information </p>
            </div>

            <div className=' xl:w-8/12 mx-auto shadow-md'>

                {/* Profile Card  */}
              

                    <div className='bg-linear-65 from-purple-500 to-pink-500 w-full h-[400px] flex flex-col justify-center items-center'>
                        <div className='p-2 border-2 rounded-full border-white'>
                            <img src='https://cdn-icons-png.flaticon.com/512/219/219988.png' alt="" className='w-24 h-24 mx-auto ' />
                        </div>
                        <div className='font-semibold text-center pt-5'>
                            <h1 className='text-3xl text-white'> Sultan Mia </h1>
                            <p className='text-white'>sultan5623@gmail.com</p>
                        </div>
                    </div>


                    <div className='h-[600px] w-full py-10'>
                        <div className='bg-blue-100 flex justify-between p-10 gap-8 my-4'>
                            <div className='flex flex-col  lg:text-xl space-y-4 '>
                                <h1> <span>Name:</span> Emon </h1>
                                <h1><span>Address:</span> Dhaka Bangladesh</h1>
                            </div>


                            <div className='flex flex-col  lg:text-xl space-y-4 '>
                                <h1><span>Email:</span> sultan5623@gmail.com </h1>
                                <p> <span>Phone:</span> 013454346543 </p>
                            </div>
                        </div>
                        <div className='flex justify-center'>  <Link to='/updateProfile' className='btn btn-primary mx-auto md:text-xl'> <MdEdit /> Update Profile </Link> </div>
                    </div>
            </div>
        </div>
    );
};

export default Profile;