import React, { useEffect, useState } from 'react'
import Navbar from '../Header/Navbar'
import EventCard from './EventCard'
import axios from 'axios';

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import Logo_Bg from '../../assets/Logo_Bg.png';


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
            <div className='bg-[#e1d2fe2c]'>
                <div className='flex space-x-10 flex-wrap pt-20 justify-center'>

                    {Loading ? ("Loading...") : (

                        data.map((item) => {
                            return <EventCard key={item._id} cardData={item} />
                        })

                    )}

                </div>

            </div>



        </>
    )
}

export default Events