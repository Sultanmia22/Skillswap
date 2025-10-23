import React, { useEffect, useState } from 'react';
import CardPopularSkill from './CardPopularSkill';
import Loading from './Loading';

const PopularSkill = () => {
    const [skillData,setSkillData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=> {
        setLoading(true)
         fetch('/skills.json')
        .then(res => res.json())
        .then(data => setSkillData(data))
        setLoading(false)
    }, [])

   if(loading){
    return <Loading/>
   } 

    return (
        <div>
            <h2 className='text-4xl font-bold text-center underline pb-2'> Popular Skills </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-6'>
                
            {
                skillData.map(data => <CardPopularSkill key={data.skillId} data={data} loading={loading} />)
            }

            </div>
        </div>
    );
};

export default PopularSkill;