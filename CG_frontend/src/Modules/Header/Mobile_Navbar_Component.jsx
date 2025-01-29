import React, { useState } from 'react'
import img from '../../assets/CG_Logo.png'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Mobile_Drawer from './Mobile_Drawer';


const Mobile_Navbar_Component = () => {

    const [DrawerOpen, SetDrawerOpen] = useState(false);

    const handelClick = () => {
        SetDrawerOpen((prev) => !prev)
    }

    return (
        <>

            <div className='bg-gradient-to-r from-[#5C21D0] to-[#3D0FAA] py-6'>
                <div className='container flex m-auto justify-between items-center px-8 max-sm:px-4'>
                    <img src={img} alt="" className='w-[170px]' />

                    {DrawerOpen ?
                        (<div className='flex items-center' onClick={handelClick}>
                            <RxCross1 className='text-white text-2xl sm:text-3xl' />
                            <span className='text-white text-md sm:text-lg font-bold pl-1'>Close</span>
                        </div>)
                        :
                        (<div className='flex items-center' onClick={handelClick}>
                            <AiOutlineMenu className='text-white text-2xl sm:text-3xl' />
                            <span className='text-white text-md sm:text-lg font-bold pl-1'>Menu</span>
                        </div>)}

                </div>
            </div >


            <div className={DrawerOpen ? "" : "hidden"}>
                <Mobile_Drawer />
            </div>

        </>
    )
}

export default Mobile_Navbar_Component