import React from 'react'

const ProductGallery = () => {
  return (
    <div className='flex flex-col justify-center items-center md:px-10'>
      <h1 className='text-2xl sm:text-3xl font-semibold subHeading text-center py-20'>
        Gallery
      </h1>
      <p className='text-xl mb-5 italic'>"Sleek and Stunning"</p>
      <div className='flex flex-wrap items-center justify-center gap-10'>
        <img
          src='https://cld.accentuate.io/6596585914464/1684307819356/AER21031_citysling2_lifestyle_6.jpeg?v=1684307819356&options=w_1512'
          alt=''
          className='h-[40vh] object-cover'
        />
        <img
          src='https://cld.accentuate.io/6596585914464/1684307809999/AER21031_citysling2_lifestyle_5.jpeg?v=1684307809999&options=w_1512'
          alt=''
          className='h-[40vh] object-cover'
        />
        <img
          src='https://cld.accentuate.io/6596585914464/1684307815614/AER21031_citysling2_lifestyle_9.jpeg?v=1684307815614&options=w_1512'
          alt=''
          className='h-[40vh] object-cover'
        />
        <img
          src='https://cld.accentuate.io/6596585914464/1684307821827/AER21031_citysling2_lifestyle_2.jpeg?v=1684307821827&options=w_1512'
          alt=''
          className='h-[40vh] object-cover'
        />
        <img
          src='https://cld.accentuate.io/6596585914464/1684307807972/AER21031_citysling2_lifestyle_8.jpeg?v=1684307807973&options=w_1512'
          alt=''
          className='h-[40vh] object-cover'
        />
      </div>
    </div>
  )
}

export default ProductGallery
