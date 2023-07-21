import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-evenly'>
      <div className='flex flex-col justify-center items-center gap-6 h-[70vh] w-[50vw]'>
        <h1 className='text-8xl font-semibold'>Aer City Sling 2</h1>
        <p className='text-2xl'>
          The everyday sling bag designed for the city.
        </p>
      </div>
      <div className='w-[50vw]'>
        <img
          src='https://cld.accentuate.io/6596585914464/1684307806054/AER21031_citysling2_lifestyle_3.jpeg?v=1684307806055&options=w_1512'
          alt=''
          className='object-cover'
        />
      </div>
    </div>
  )
}

export default Hero
