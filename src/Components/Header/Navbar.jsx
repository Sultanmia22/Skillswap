import React, { use } from 'react';
import logoImg from '../../assets/experience.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../PrivetContent/AuthContext';
import { toast } from 'react-toastify';
const Navbar = () => {
    const { user, signOutUser, setUser } = use(AuthContext)
    const links = <>
        <NavLink to='/' className='font-semibold  text-xl'> Home </NavLink>
        <NavLink to='/profile' className='font-semibold text-xl'> My Profile </NavLink>
    </>

    //! Sign Out Function 
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                setUser(null)
                toast.success('Sign Out Successfull')
            })
            .catch(() => {

            })
    }

    return (
        <nav className="navbar bg-base-100 shadow-sm md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <img src={logoImg} alt="" className='w-12 h-12 ' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ?
                        <div className='flex gap-4 items-center'>
                            <div> <img src={user?.photoURL} alt="" className='w-14 h-14 rounded-full' /> </div>
                            <Link onClick={handleSignOut} className='btn btn-neutral'> Sign Out </Link>
                        </div>
                        :
                        <div className='flex gap-4 items-center'>
                            <Link to='/login' className='btn btn-outline btn-primary'>Login</Link>
                            <Link to='/signup' className='btn btn-outline btn-secondary'>Sign up</Link>
                        </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;