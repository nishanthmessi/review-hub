import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

const NewsletterSection = () => {
  return (
    <div className='flex flex-col justify-center items-center px-10 py-10 bg-gray-100 gap-4'>
      <div>
        <h1 className='text-2xl mb-2'>Get latest updates from us</h1>
        <p>Don't miss out offers and value product</p>
      </div>
      <div className='flex justify-center w-full'>
        <input
          type='email'
          placeholder='your email'
          className='px-2 py-3 w-[20%] outline outline-1'
        />
        <button className='bg-slate-900 text-white px-4'>
          <ArrowRightSLineIcon />
        </button>
      </div>
    </div>
  )
}

export default NewsletterSection
