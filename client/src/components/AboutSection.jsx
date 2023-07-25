import React from 'react'

const AboutSection = () => {
  return (
    <div className='flex flex-col justify-center items-center px-10 pb-10'>
      <h1 className='text-2xl sm:text-3xl font-semibold subHeading text-center py-20'>
        About the Brand
      </h1>
      <div className='flex flex-col gap-20 sm:w-[60vw]'>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-10'>
          <img
            src='https://aersf.com/cdn/shop/files/2023_aer_banner_2500_story_STORY_880x.jpg?v=1686607091'
            alt=''
            className='h-[20vh] w-[80vw] sm:h-[40vh] sm:w-[40vw] object-cover'
          />
          <div>
            <h1 className='text-2xl font-semibold py-6'>Aer's Story</h1>
            <p>
              Aer started in 2014 as a crowdfunding project that combined a gym
              bag and an office bag into one simplified design. Since then,
              we’ve grown our collection with award-winning products to help you
              travel better.
            </p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row-reverse justify-center items-center gap-10'>
          <img
            src='https://aersf.com/cdn/shop/files/2023_aer_banner_2500_story_DNA_880x.jpg?v=1686607000'
            alt=''
            className='h-[20vh] w-[80vw] sm:h-[40vh] sm:w-[40vw] object-cover'
          />
          <div>
            <h1 className='text-2xl font-semibold py-6'>Our DNA</h1>
            <p className='mb-8'>
              Simplicity: We're minimalists at heart and like to keep things
              clean and simple.
            </p>
            <p className='mb-8'>
              Utility: Our thoughtful designs offer smart functionality and
              organization.
            </p>
            <p>
              Durability: We use premium materials and trims that are built to
              last. If anything happens, you're backed by our lifetime warranty.
            </p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-10'>
          <img
            src='https://aersf.com/cdn/shop/files/2023_aer_banner_2500_story_SF_880x.jpg?v=1686607000'
            alt=''
            className='h-[20vh] w-[80vw] sm:h-[40vh] sm:w-[40vw] object-cover'
          />
          <div>
            <h1 className='text-2xl font-semibold py-6'>
              Designed in San Francisco
            </h1>
            <p>
              We're a small team based in the Bay Area and we're passionate
              about gear, traveling and creating great products. We call San
              Francisco home, with an office in the Mission District and
              warehouse in the East Bay.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
