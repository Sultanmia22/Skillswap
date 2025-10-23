import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.int';

const AuthProvider = ({children}) => {

    //! user observe state 
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

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

    //! User Observe feture here 
    useEffect(()=> {
         onAuthStateChanged(auth, (currentUser) => {
             setUser(currentUser)
             setLoading(false)
         })
    },[])

    const authData = {
        creatUser,
        updateUserProfile,
        signInUser,
        setUser,
        user,
        signOutUser,
        forgoteUserPass,
        loading
    }

    console.log(user)

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;