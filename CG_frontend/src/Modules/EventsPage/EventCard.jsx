import React from 'react'

const EventCard = ({ cardData }) => {
    return (

        <>
            <div className='w-[360px] h-[220px] mb-36'>
                {/* Image with Caption */}
                <div className="relative">
                    <img src="https://placehold.co/360x220" alt="" className="w-full h-full object-cover rounded-md" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                        <h2 className="text-2xl font-bold">{cardData.eventTitle}</h2>
                        <p className="text-xs">{cardData.eventLocation}</p>
                    </div>
                </div>

                {/* Back Content */}

                <p className='mt-2 text-gray-700'>{cardData.description}</p>

                <span className='mt-2 cursor-pointer'>Read More ➡️</span>

            </div>
        </>

    )
}

export default EventCard