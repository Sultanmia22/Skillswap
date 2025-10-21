import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';

const SkillDetails = () => {

    const [detailsData, setDetailsData] = useState({})

    const { id } = useParams();

    const data = useLoaderData()

    useEffect(() => {

        const filterData = data.find(data => data.skillId == id)
        setDetailsData(filterData)

    }, [data, id])

    if (!detailsData) {
        return <h2>Loading....</h2>
    }

    const { skillId, skillName, providerName, providerEmail, price, rating, slotsAvailable, description, image, category } = detailsData

    const handleSubmit = (event) => {
        event.preventDefault()
         toast.success('Submission Successfull')
         event.target.reset()
    }

    return (
        <div>
            <title>Detials Pages</title>
            <div className='flex flex-col md:flex-row py-10  gap-20 '>

                <div className=' border-2 border-gray-200 p-8 rounded-lg shadow'>
                    <img src={detailsData.image} alt="" className='rounded-lg object-cover' />
                </div>

                <div className='flex-1 '>

                    <h2 className='text-4xl font-semibold my-8'> Skill Name : {skillName} </h2>
                    <div className='space-y-8 details-style'>
                        <p> Category : {category} </p>
                        <p> Description : {description} </p>
                        <h2> Provider Name : {providerName} </h2>
                        <p> Provider Email : {providerEmail} </p>
                        <p> SlotsAvailable : {slotsAvailable} </p>
                        <p>Rating : {rating} </p>
                        <p> Price : {price}$</p>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 max-w-[600px]  shrink-0 shadow-2xl my-8 mx-auto">
                <h2 className='text-4xl font-bold text-center p-6'> Book Session </h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                        <label className="label font-medium">Name</label>
                        <input type="text" className="input w-full" placeholder="Write Your Name" name='name' required/>   
                        <label className="label font-medium">Email</label>
                        <input type="email" className="input w-full" placeholder="Enter Your Email" name='email' required/>                       
                        <button className="btn btn-primary mt-4 mx-w-[400px]"> Submit Now </button>
                    </fieldset>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SkillDetails;