import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import Menu4LineIcon from 'remixicon-react/Menu4LineIcon'
import Logo from '../assets/nt-reviews-logo.png'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-10 backdrop-blur-md backdrop-saturate-125 bg-white/40 flex justify-between items-center px-4 md:px-10 py-4'>
      <div className='hidden md:block'>
        <ul className='flex gap-10'>
          <li>Categories</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <img src={Logo} alt='' className='h-14' />
      </div>
      <div className='hidden md:block bg-gray-200 rounded-md'>
        <div className='flex items-center px-2'>
          <SearchLineIcon />
          <input
            type='text'
            placeholder='search'
            className='px-2 py-2 bg-gray-200 outline-none placeholder:text-sm'
          />
        </div>
      </div>
      <div className='flex md:hidden items-center gap-6'>
        <SearchLineIcon />
        <div className='bg-gray-800 p-2 rounded-full'>
          <Menu4LineIcon className='text-white' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
