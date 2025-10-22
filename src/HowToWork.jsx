import React from 'react';

const HowToWork = () => {
    return (
        <div className='mb-6'>
            <h1 className='text-3xl font-bold text-center py-5'> How To Works </h1>
            <div className='grid md:grid-cols-3 text-center text-gray-800 bg-white shadow-md p-10 gap-5 '>
                <div className='bg-[#81ecec] px-10 py-5 space-y-3 rounded-lg'>
                    <h2 className='text-4xl font-bold'>Browse Skills</h2>
                    <p>Explore available skills in your local area by category or keyword.</p>
                </div>
                <div className='bg-[#74b9ff] px-10 py-5 space-y-3 rounded-lg'>
                    <h2 className='text-4xl font-bold'>View Details</h2>
                    <p>Click on a skill to view details like rating, price, availability, and provider info.</p>
                </div>
                <div className='bg-[#a29bfe] px-10 py-5 space-y-3 rounded-lg'>
                   <h2 className='text-4xl font-bold'> Book & Connec</h2>
                   <p>Book a session and connect with the provider for your selected skill.</p>
                </div>
            </div>
        </div>
    );
};

export default HowToWork;