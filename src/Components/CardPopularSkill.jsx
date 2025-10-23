import React from 'react';
import { Link } from 'react-router';

const CardPopularSkill = ({ data, loading }) => {

    if (loading) {
        return <h2> Loading..... </h2>
    }

    const { skillId, skillName, providerName, providerEmail, price, rating, slotsAvailable, description, image, category } = data
    return (
        <div data-aos="zoom-in">
            <div className="card bg-base-100  shadow-sm p-8 rounded-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" className=' w-[300px] h-[300px] md:w-full md:h-[400px]' />
                </figure>
                <div className="">
                    <h2 className="card-title text-2xl py-4"> {skillName} </h2>
                    <div className='flex justify-between'>
                        <p className='text-xl font-semibold'> Rating: {rating}</p>
                        <p className='text-xl font-semibold'> Price: {price}$</p>
                    </div>
                    <div className="card-actions justify-end pt-5">
                        <Link to={`/newsdetails/${skillId}`} className="btn btn-primary">Skill Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPopularSkill;