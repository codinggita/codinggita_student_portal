import React from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from "@/components/ui/button"


const LandingPage = () => {
  return (
    <>
      <div className='mt-50'>
        <Button>shadcn</Button>
      </div>
      <Outlet />
    </>
  )
}

export default LandingPage