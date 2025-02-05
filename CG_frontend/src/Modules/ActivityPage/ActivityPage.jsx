import React from 'react'
import PointsTable from './PointsTable'

const ActivityPage = () => {
  return (
    <>
      <div class="relative h-screen w-full lg:mt-25">
        {/* Gradient */}
        <div class="absolute inset-0 bg-gradient-to-b from-[#151d50] to-black"></div>
        <div class="relative z-10 flex items-center justify-center h-full">
          <PointsTable />
        </div>
      </div>

    </>
  )
}

export default ActivityPage