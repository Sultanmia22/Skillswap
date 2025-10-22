import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.int';

const AuthProvider = ({children}) => {

    //! user observe state 
    const [user,setUser] = useState(null)

    //! Creat Account with email password 
    const creatUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //! Update Profile 
    const updateUserProfile = (displayName,photoURL) => {
        return updateProfile(auth.currentUser,{
            displayName,photoURL
        })
    }

    //! Sign In User 
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    //! Sign Out 
    const signOutUser = () => {
        return signOut(auth)
    }

    //! Forgote Password
    const forgoteUserPass = (email) => {
        return sendPasswordResetEmail(auth,email)
    }

    const authData = {
        creatUser,
        updateUserProfile,
        signInUser,
        setUser,
        user,
        signOutUser,
        forgoteUserPass
    }

    console.log(user)

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;