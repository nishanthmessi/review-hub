import ArrowRightUpLineIcon from 'remixicon-react/ArrowRightUpLineIcon'

const BrandSection = () => {
  return (
    <div className='flex flex-col justify-center items-center px-10 py-10'>
      <h1 className='subHeading text-2xl sm:text-3xl font-semibold pt-10 pb-10'>
        Visit Offical Store!
      </h1>
      <a
        href='https://aersf.com/'
        target='_blank'
        className='flex bg-slate-900 shadow-lg hover:shadow-gray-400 transition duration-700 ease-in-out rounded-lg text-white p-2 gap-2'
      >
        aersf.com <ArrowRightUpLineIcon />
      </a>
    </div>
  )
}

export default BrandSection
