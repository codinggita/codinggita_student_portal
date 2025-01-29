import React from 'react'

const Mobile_Drawer = () => {
    return (
        <>
            <div className='flex flex-wrap'>
                <div className='cursor-pointer p-2 border-1 border-gray-300 text-center max-sm:w-[100%] sm:w-[50%]'>HOME</div>
                <div className='cursor-pointer p-2 border-1 border-gray-300 text-center max-sm:w-[100%] sm:w-[50%]'>CG-Connect</div>
                <div className='cursor-pointer p-2 border-1 border-gray-300 text-center max-sm:w-[100%] sm:w-[50%]'>CG-Clubs</div>
                <div className='cursor-pointer p-2 border-1 border-gray-300 text-center max-sm:w-[100%] sm:w-[50%]'>Newsletter</div>
                <div className='cursor-pointer p-2 border-1 border-gray-300 text-center max-sm:w-[100%] sm:w-[50%]'>Login</div>
            </div>

            <div className='bg-gray-50 mt-5 p-5'>
                <div className='text-center font-bold'>Quick Links</div>
                <div className='flex flex-wrap justify-center'>
                    <div className="cursor-pointer m-3">Student Activity</div>
                    <div className="cursor-pointer m-3">Media Gallery</div>
                    <div className="cursor-pointer m-3">Results</div>
                    <div className="cursor-pointer m-3">Events</div>
                    <div className="cursor-pointer m-3">Student Projects</div>
                </div>
            </div>
        </>
    )
}

export default Mobile_Drawer