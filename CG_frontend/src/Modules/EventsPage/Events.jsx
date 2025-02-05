import React, { useEffect, useState } from 'react'
import Navbar from '../Header/Navbar'
import Left_EventCard from './Left_EventCard'
import Right_EventCard from './Right_EventCard'
import axios from 'axios';


import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import Logo_Bg from '../../assets/Logo_Bg.png';
import loadGif from '../../assets/Rolling@1x-1.0s-200px-200px.gif'

const Events = () => {

    const [data, Setdata] = useState();
    const [Loading, setLoading] = useState(true);


    useEffect(() => {

        const fetchEvents = async () => {
            try {
                const events = await axios.get('http://localhost:8080/students/events')
                Setdata(events.data);
                console.log(events.data)
            } catch (err) {
                console.log("Error :", err)
            }
            finally {
                setLoading(false)
            }
        }

        fetchEvents()
    }, [])


    return (
        <>
            {/* For Screens of Size Small then lg */}
            <div className='lg:hidden container m-auto mt-10'>
                {Loading ? (
                    null
                ) : (
                    data.map((item, index) => (
                        <div key={item._id} className="flex flex-col items-center max-[372px]:scale-82 ">
                            {/* Event Card */}
                            <Left_EventCard cardData={item} className="ml-8" />
                        </div>
                    ))
                )}
            </div>




            {/* For Screens of Lg and larger */}
            {Loading ? <img src="loadGif" alt="" /> : (
                <div className="relative flex justify-center mt-45 max-lg:hidden">
                    {/* Vertical Line */}
                    <div className="absolute h-[1300px] w-[1.5px] bg-gray-300"></div>

                    {/* Event Cards Container */}
                    <div className="relative flex flex-col gap-8 pt-5">
                        {Loading ? (
                            null
                        ) : (
                            data.map((item, index) => (
                                index % 2 == 0 ? (<div key={item._id} className="relative flex  rounded-sm">
                                    {/* Event Card */}
                                    <Left_EventCard cardData={item} className="ml-8" />
                                </div>) : null
                            ))
                        )}
                    </div>

                    <div className="relative flex flex-col gap-8 left-0 pt-25">
                        {Loading ? (
                            null
                        ) : (
                            data.map((item, index) => (
                                index % 2 !== 0 ? (<div key={item._id} className="relative flex">
                                    {/* Event Card */}
                                    <Right_EventCard cardData={item} className="ml-8" />
                                </div>) : null
                            ))
                        )}
                    </div>
                </div>
            )}


            <div className='flex bg-amber-300 justify-center mt-10'>
                Pagination
            </div>

        </>
    )
}

export default Events