import ArrowRightUpLineIcon from 'remixicon-react/ArrowRightUpLineIcon'

const Hero = () => {
  return (
    <div className='flex flex-col-reverse sm:flex-row justify-evenly'>
      <div className='flex flex-col sm:justify-center items-center gap-6 h-auto sm:h-[70vh] w-full sm:w-[50vw] mt-10 sm:mt-0 px-2'>
        <h1 className='text-5xl sm:text-8xl text-center font-semibold'>
          Aer City Sling 2
        </h1>
        <p className='text-xl text-center sm:text-2xl'>
          The everyday sling bag designed for the city.
        </p>
        <button className='flex bg-slate-900 shadow-lg hover:shadow-gray-400 transition duration-700 ease-in-out rounded-lg text-white p-2'>
          Visit Offical Site. <ArrowRightUpLineIcon />
        </button>
      </div>
      <div className='w-full sm:w-[50vw]'>
        <img
          src='https://cld.accentuate.io/6596585914464/1684307806054/AER21031_citysling2_lifestyle_3.jpeg?v=1684307806055&options=w_1512'
          alt=''
          className='object-cover h-[60vh] sm:h-auto'
        />
      </div>
    </div>
  )
}

export default Hero
