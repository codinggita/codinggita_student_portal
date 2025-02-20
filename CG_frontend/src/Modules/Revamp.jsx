import React from 'react'
import { Button } from "@/components/ui/button"
import img from '../assets/CG_Logo.png'

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const Revamp = () => {


  return (

    <>

      <div className="bg-[#101426] h-screen">

        <div className='bg-[#121729] w-[15%] h-screen border-r border-gray-800 rounded-2xl'>

          <div className='scale-75 pt-3 pb-1'>
            <img className='border-red-50 z-10' src={img} alt="" />
          </div>
          <div className='border-b border-gray-800 w-full'></div>

          {/* Links Button Groups */}
          <div className='p-3'>
            <Button variant="ghost" className='text-white hover:bg-[#923dee2b] hover:text-white w-full'>Ghost</Button>
            <Button variant="ghost" className='text-white hover:bg-[#923dee2b] hover:text-white w-full'>Ghost</Button>
            <Button variant="ghost" className='text-white hover:bg-[#923dee2b] hover:text-white w-full'>Ghost</Button>
            <Button variant="ghost" className='text-white hover:bg-[#923dee2b] hover:text-white w-full'>Ghost</Button>
            <Button variant="ghost" className='text-white hover:bg-[#923dee2b] hover:text-white w-full'>Ghost</Button>
          </div>


        </div>
      </div>

    </>

  )
}

export default Revamp