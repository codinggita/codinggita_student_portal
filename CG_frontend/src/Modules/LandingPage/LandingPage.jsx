import React from 'react'
import { Outlet } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <div className='mt-45'>LandingPage</div>
      <Outlet />
    </>
  )
}

export default LandingPage