import React from 'react'

const YoutubeSection = () => {
  return (
    <div className='grid justify-center px-10 mt-10 pb-10 bg-gray-100'>
      <h1 className='text-2xl sm:text-3xl font-semibold subHeading text-center py-20'>
        What Experts Say...
      </h1>
      <div>
        <div className='aspect-w-16 sm:aspect-w-16 aspect-h-10 sm:aspect-h-8 w-full sm:w-[60vw]'>
          <iframe
            src='https://www.youtube.com/embed/CLaPzDWalAg'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
        <div className='pt-6'>
          <h1 className='text-xl italic text-center sm:text-end'>
            "Packer Hacker Tom's favourite sling"
          </h1>
        </div>
      </div>
    </div>
  )
}

export default YoutubeSection
