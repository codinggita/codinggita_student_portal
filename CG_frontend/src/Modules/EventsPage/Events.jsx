import React from 'react'
import Navbar from '../Header/Navbar'
import EventCard from './EventCard'

const Events = () => {
    return (
        <>
            <Navbar />
            <div className='bg-[#e1d2fe2c]'>
                <div className="container m-auto ]">
                    <div className='flex space-x-10 flex-wrap justify-center pt-20'>
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>

                </div>
            </div>


        </>
    )
}

export default Events