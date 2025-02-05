import React from 'react'

const Left_EventCard = ({ cardData }) => {
    return (

        <>

            <div className='flex items-start lg:mb-40 max-lg:mb-30'>

                <div className='w-[360px] h-[220px]'>
                    <h1 className={`text-black font-inter text-[1.4605rem] font-semibold text-right`}
                    >{cardData?.date}</h1>

                    {/* Image with Caption */}
                    <div className="relative">
                        <img src="https://placehold.co/360x220" alt="" className="w-full h-full object-cover rounded-md" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-2xl font-bold">{cardData?.eventTitle}</h2>
                            <p className="text-xs">{cardData?.eventLocation}</p>
                        </div>
                    </div>

                    {/* Back Content */}

                    <p className='mt-2 text-gray-700'>{cardData?.description}</p>

                    <span className='mt-2 cursor-pointer'>Read More ➡️</span>
                </div>

                <div class= {`flex items-center group pt-2 pl-5 max-lg:hidden`} >
                    {/* <!-- Outer Circle --> */}
                    <div class="w-4 h-4 rounded-full bg-gray-300 group-hover:bg-purple-700 flex items-center justify-center transition">
                        {/* <!-- Inner Circle --> */}
                        <div class="w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition"></div>
                    </div>
                    {/* <!-- Line --> */}
                    <div class="w-8 h-[2px] bg-gray-300 group-hover:bg-gray-200 transition"></div>
                </div>

            </div>

        </>

    )
}

export default Left_EventCard