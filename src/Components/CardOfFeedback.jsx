import React from 'react';
import { AiOutlineLike, AiTwotoneDislike } from 'react-icons/ai';
import { LiaCommentSolid } from 'react-icons/lia';

const CardOfFeedback = ({data}) => {
    return (
        <div className='flex flex-col justify-between shadow-md p-10 bg-white mb-4 rounded-xl' data-aos="flip-left">
           <div className='flex items-center gap-3'>
            <div className='text-center space-y-1'>
                <img src={data.image} alt="" className='rounded-full' />
            </div>
            <div>
                <p className='text-xl font-bold'> {data.name} </p>
                 <p> ⭐️⭐️⭐️⭐️⭐️ <span> {`(${data.rating})`} </span></p>
                <p> {data.date} </p>
            </div>
           </div>

           <div className='py-4'>
            <p> {data.feedback} </p>
           </div>

           <div className='flex justify-between items-center'>
             <div className='flex gap-1 items-center'>
            <p><AiOutlineLike size={21} /></p>
             <p><AiTwotoneDislike size={21} /></p>
             </div>
             <p> <LiaCommentSolid size={21} /></p>
           </div>
        </div>
    );
};

export default CardOfFeedback;