import React from 'react'

const ProductDetails = () => {
  return (
    <div className='flex px-10'>
      <div className='grid grid-cols-2 w-[50vw] gap-2'>
        <div>
          <img
            src='https://cld.accentuate.io/39444979843168/1647147715869/AER21031_citysling2_black_zipperpull.jpg?v=0&options=w_540'
            alt=''
          />
        </div>
        <div>
          <img
            src='https://cld.accentuate.io/39444979843168/1647147702724/AER21031_citysling2_black_34hero.jpg?v=0&options=w_540'
            alt=''
          />
        </div>
        <div>
          <img
            src='https://cld.accentuate.io/39444979843168/1647147709454/AER21031_citysling2_black_interior.jpg?v=0&options=w_540'
            alt=''
          />
        </div>
        <div>
          <img
            src='https://cld.accentuate.io/39444979843168/1647147711491/AER21031_citysling2_black_label.jpg?v=0&options=w_540'
            alt=''
          />
        </div>
      </div>
      <div className='w-[50vw] flex flex-col justify-center items-start p-10 gap-10'>
        <div className='text-start'>
          <p className='text-lg'>
            The City Sling 2 is the essential, everyday sling bag designed for
            exploring the city. It features multiple pockets for your everyday
            essentials, premium materials and trims for enhanced durability and
            a stowaway sling strap that transforms the bag into a storage kit.
          </p>
        </div>
        <div className='flex flex-col justify-center text-start'>
          <div>
            <h1 className='text-xl font-semibold'>Product Details</h1>
            <ul className='flex flex-col gap-2'>
              <li>1680D Cordura® ballistic nylon exterior</li>
              <li>YKK® zippers</li>
              <li>Aircraft-grade aluminum tension locks</li>
              <li>Soft woven lining for a premium look and feel</li>
              <li>Stowaway sling strap with Fidlock® magnetic fastener</li>
              <li>Quick-access front pocket with keychain</li>
              <li>Smart organization for your everyday essentials</li>
              <li>Secure back pocket for your passport or wallet</li>
              <li>Quick-grab top handle for versatile carrying</li>
              <li>Imported</li>
            </ul>
          </div>

          <div className='mt-10'>
            <h1 className='font-semibold text-lg'>Dimensions</h1>
            <ul className='flex flex-col gap-2'>
              <li>Length: 13" (33 cm)</li>
              <li>Width: 4.75" (12 cm)</li>
              <li>Depth: 3.5" (9 cm)</li>
            </ul>
          </div>

          <div className='mt-10'>
            <h1 className='font-semibold text-lg'>Volume</h1>
            <p> 2.5 L</p>
          </div>

          <div className='mt-10'>
            <h1 className='font-semibold text-lg'>Weight</h1>
            <p> 0.9 lbs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
