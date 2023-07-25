import ArrowRightUpLineIcon from 'remixicon-react/ArrowRightUpLineIcon'

const BuySection = () => {
  return (
    <div className='flex flex-col justify-center items-center px-10 py-10 bg-gray-100'>
      <h1 className='subHeading text-2xl sm:text-3xl font-semibold pt-20 pb-10'>
        Visit Offical Store!
      </h1>
      <button className='flex bg-slate-900 shadow-lg hover:shadow-gray-400 transition duration-700 ease-in-out rounded-lg text-white p-2 gap-2'>
        aersf.com <ArrowRightUpLineIcon />
      </button>
    </div>
  )
}

export default BuySection
