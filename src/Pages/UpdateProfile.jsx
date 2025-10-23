import React, { use } from 'react';
import { AuthContext } from '../PrivetContent/AuthContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const UpdateProfile = () => {
    const { updateUserProfile, setUser, user } = use(AuthContext)

    const handleUpdateProfile = (event) => {
        event.preventDefault()

        const displayName = event.target.name.value;
        const photoURL = event.target.photourl.value;

        updateUserProfile(displayName, photoURL)
            .then(() => {
                setUser(() => ({ ...user, displayName, photoURL }))
                event.target.reset()
                toast.success('Profile Update Successfull')
            })
            .catch(() => {
                toast.error('Something was Wrong! Try Again')
            })
    }

    return (
        <div className='flex flex-col min-h-screen justify-center items-center' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <title>Update Profile page</title>
            <h2 className='text-4xl font-bold my-5'> Update Your Profile  </h2>
            <div class="card bg-pink-300 w-full max-w-sm shrink-0 shadow-2xl">
                <div class="card-body">
                    <form onSubmit={handleUpdateProfile}>
                        <fieldset class="fieldset" className=''>
                            <label class="label">Enter New Name</label>
                            <input type="text" class="input" placeholder="Name" name='name' />
                            <label class="label"> Enter New Photo URL</label>
                            <input type="text" class="input" placeholder="photoURL" name='photourl' />

                            <button class="btn btn-neutral mt-4">Save</button>
                        </fieldset>
                    </form>
                </div>
            </div>

            <div> <Link to='/' className='btn btn-neutral my-10'> GO Back Home</Link> </div>
        </div>
    );
};

export default UpdateProfile;