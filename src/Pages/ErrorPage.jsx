import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const ErrorPage = () => {
     const error = useRouteError();
    return (
       <div>
        <Navbar/>
         <div className='flex flex-col justify-center items-center min-h-screen'>
            <h2> 404 </h2>
            <p>Page Not Found</p>
        </div>
        <Footer/>
       </div>
    );
};

export default ErrorPage;