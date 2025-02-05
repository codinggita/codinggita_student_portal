import React from 'react'
import heading from '../../GenericComponents/heading'
import NewsletterCard from './NewsletterCard'
const Newsletter = () => {
  return (
    <>
      <div className='mt-45 container m-auto'>
        <h1 className='text-4xl p-6 pl-0'>CG Newsletter</h1>
        <div className='flex flex-wrap space-x-5 space-y-6 justify-center'>


          {
            [...Array(10)].map(() => (
              <div className='flex flex-col items-center'>
                <NewsletterCard />
              </div>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default Newsletter