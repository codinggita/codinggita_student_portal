import React from 'react'

const EventCard = () => {
    return (

        <>
            <div className='w-[360px] h-[220px] mb-36'>
                {/* Image with Caption */}
                <div class="relative">
                    <img src="https://placehold.co/360x220" alt="" class="w-full h-full object-cover rounded-md" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md"></div>
                    <div class="absolute bottom-4 left-4 text-white">
                        <h2 class="text-2xl font-bold">Awareness Rally</h2>
                        <p class="text-xs">Rai University, Ahmedabad</p>
                    </div>
                </div>

                {/* Back Content */}

                <p className='mt-2 text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Ipsum has beenthe.typesetting industry.</p>

                <span className='mt-2 cursor-pointer'>Read More ➡️</span>

            </div>
        </>

    )
}

export default EventCard