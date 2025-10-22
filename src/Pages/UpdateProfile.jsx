import React, { use } from 'react';
import { AuthContext } from '../PrivetContent/AuthContext';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const {updateUserProfile} = use(AuthContext)

  const handleUpdateProfile = (event) => {
      event.preventDefault()

    const displayName = event.target.name.value;
    const photoURL = event.target.photourl.value;

    updateUserProfile(displayName,photoURL)
    .then(() => {
        event.target.reset()
        toast.success('Profile Update Successfull')
    })
    .catch(() => {
        toast.error('Something was Wrong! Try Again')
    })
  }

    return (
        <div className='flex flex-col min-h-screen justify-center items-center'>
            <title>Update Profile</title>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div class="card-body">
                    <form onSubmit={handleUpdateProfile}>
                        <fieldset class="fieldset">
                            <label class="label">Email</label>
                            <input type="text" class="input" placeholder="Name" name='name'/>
                            <label class="label">Photo URL</label>
                            <input type="text" class="input" placeholder="photoURL" name='photourl' />
                           
                            <button class="btn btn-neutral mt-4">Save</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;