import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";


const EventCard = ({ cardData }) => {
    return (
        <div className="hover:bg-[#2915487a] w-fit p-4 rounded-md transition-colors duration-300">
            <div className="w-[290px]">
                {/* Image Section */}
                <img
                    src="https://placehold.co/290x180"
                    alt="Power of Reading"
                    className="w-full h-[180px] object-cover rounded-md"
                />

                {/* Title */}
                <h1 className="text-2xl pt-2 font-serif font-semibold leading-snug text-purple-500">
                    {cardData?.date} {cardData?.eventTitle}
                </h1>

                {/* Description */}
                <p className="text-lg pt-2 text-gray-400">
                    {cardData?.description}
                </p>

                {/* Read Now Section */}
                <div className="pt-2 flex items-center gap-1 text-purple-800 font-medium cursor-pointer hover:text-purple-600">
                    <span>Read now</span>
                    <IoIosArrowRoundUp className="rotate-90 text-2xl" />
                </div>
            </div>
        </div>
    )
}

export default EventCard