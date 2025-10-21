import React from 'react';
import {  FaBookOpen, FaCalendar } from 'react-icons/fa';
import PopularSkill from '../Components/PopularSkill';
import { Link } from 'react-router';

const Home = () => {
    return (
        
        <div>
            <title> Home Pages </title>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item flex relative justify-center items-center flex-col w-full bg-linear-to-r from-cyan-500 to-blue-500 gap-5 my-6 rounded-lg  py-10 md:py-32">
                     
                        <p> <FaBookOpen size={50} className='text-white' /></p>
                        <h1 className='md:text-6xl font-bold text-center text-white '>Share Your Skills, Learn Something New</h1>
                        <p className='md:text-3xl font-bold'>Connect with local experts and trade skills in your community</p>
                        <button className='btn btn-neutral'> Explore Skills Now </button>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item flex relative justify-center items-center flex-col w-full bg-linear-to-t from-sky-500 to-indigo-500 gap-5 my-6 rounded-lg py-10 md:py-32">
                     
                        <p> <FaCalendar size={50} className='text-white' /></p>
                        <h1 className='md:text-6xl font-bold text-center text-white '>Learning Made Easy in 3 Steps</h1>
                        <p className='md:text-3xl font-bold'>Browse, Book, and Rate - It's that simple!</p>
                        <button className='btn btn-primary'> Get Started Free </button>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>


                 <div id="slide3" className="carousel-item flex relative justify-center items-center flex-col w-full bg-linear-to-bl from-violet-500 to-fuchsia-500 gap-5 my-6 rounded-lg py-10 md:py-32">
                     
                        <p> <FaCalendar size={50} className='text-white' /></p>
                        <h1 className='md:text-6xl font-bold text-center text-white '> Join 5000+ Skill Sharers Today</h1>
                        <p className='md:text-3xl font-bold'>Be part of a thriving learning community!</p>
                        <button className='btn btn-secondary'> Sign Up Now </button>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            
           <section>
             <PopularSkill></PopularSkill>
           </section>

        

        </div>
    );
};

export default Home; 