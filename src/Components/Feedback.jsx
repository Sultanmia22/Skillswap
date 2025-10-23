import React, { useEffect, useState } from 'react';
import CardOfFeedback from './CardOfFeedback';

const Feedback = () => {

    const [skilldata,setSkillData] = useState([])

    const [loading,setLoading] = useState(true)

    useEffect(()=> {
        setLoading(true)
        fetch('/Feedback.json')
        .then(res => res.json())
        .then(data => {
            setSkillData(data)
        })
        .catch(er => {
            // console.log(er)
        })
        .finally(setLoading(false))

    },[])

 

   
    return (
        <div>
            <h1 className='text-3xl font-bold text-center py-5 '> Feedback </h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                   skilldata.map( data => <CardOfFeedback key={data.id} data={data} /> )
                }
            </div>
        </div>
    );
};

export default Feedback;