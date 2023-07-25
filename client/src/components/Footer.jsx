import FacebookFillIcon from 'remixicon-react/FacebookFillIcon'
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon'

const Footer = () => {
  return (
    <div className='border-t-[1px] border-gray-300 bg-gray-100 pt-10 pb-10'>
      <h1 className='text-lg text-center py-6'>Follow us</h1>
      <ul className='flex justify-center gap-6'>
        <li className='cursor-pointer rounded-full hover:shadow-lg hover:shadow-gray-400 transition duration-700 ease-in-out p-1'>
          <FacebookFillIcon className='h-8 w-8' />
        </li>
        <li className='cursor-pointer rounded-full hover:shadow-lg hover:shadow-gray-400 transition duration-700 ease-in-out p-1'>
          <InstagramLineIcon className='h-8 w-8' />
        </li>
        <li className='cursor-pointer rounded-full hover:shadow-lg hover:shadow-gray-400 transition duration-700 ease-in-out p-1'>
          <TwitterFillIcon className='h-8 w-8' />
        </li>
      </ul>
      <p className='text-sm font-medium text-center pt-10'>
        © 2023, NT Review Company
      </p>
    </div>
  )
}

export default Footer
