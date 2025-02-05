import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";


const NewsletterCard = () => {
    return (
        <>
            <div className="hover:bg-[#f7f2ff7a] w-fit p-4 rounded-md transition-colors duration-300">
                <div className="w-[290px]">
                    {/* Image Section */}
                    <img
                        src="https://placehold.co/290x180"
                        alt="Power of Reading"
                        className="w-full h-[180px] object-cover rounded-md"
                    />

                    {/* Title */}
                    <h1 className="text-2xl pt-2 font-serif font-semibold leading-snug">
                        Power of Reading: How It Boosts Academics & Spiritual Growth
                    </h1>

                    {/* Description */}
                    <p className="text-lg pt-2 text-gray-800">
                        Introduction In the fast-paced world we live in, it's easy to overlook the profound
                        impact that reading good books and scriptures can have on...
                    </p>

                    {/* Read Now Section */}
                    <div className="pt-2 flex items-center gap-1 text-purple-800 font-medium cursor-pointer hover:text-purple-600">
                        <span>Read now</span>
                        <IoIosArrowRoundUp className="rotate-90 text-2xl" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewsletterCard