import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const HomeLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <Navbar/>
            </header>

          <main className='flex-grow w-11/12 mx-auto'>
              <Outlet></Outlet>
          </main>

          <footer>
           <Footer/>
          </footer>

        </div>
    );
};

export default HomeLayouts;