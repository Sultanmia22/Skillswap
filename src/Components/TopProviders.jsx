import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const TopProviders = () => {
    const [skillData, setSkillData] = useState([])




    useEffect(() => {
        fetch('/skills.json')
            .then(res => res.json())
            .then(data => {
                const topProviderData = data.sort((a, b) => a.rating - b.rating)
                    .slice(0, 3)
                setSkillData(topProviderData)
            })


    }, [])



    return (
        <div className='py-5'>
            <h1 className='text-3xl font-bold text-center pb-5 '> Top Rated Providers </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    skillData.map(data =>
                        <div className='bg-white shadow-md p-5'>
                            <figure>
                                <img src={data.image} alt="" className='h-[400px]'/>
                            </figure>
                            <div className='py-5'>
                                <h1 className='text-xl font-bold'> Skill Name : {data.skillName} </h1>
                                <p className='text-[18px] text-gray-700'> Provider Name : {data.providerName} </p>
                                <p className='text-[18px] text-gray-700'> Rating : {data.rating} </p>
                            </div>
                             <Link to={`/newsdetails/${data.skillId}`} className="btn btn-primary">Skill Details</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TopProviders;