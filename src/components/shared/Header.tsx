import React from 'react'

const Header = () => {
  return (
    <header className='text-lg text-white'>
      <ul className='flex justify-center bg-[#202026] py-4'>
        <li className='hover:bg-slate-700 hover:transition duration-150 rounded-lg'>
          <a href="#" className='py-1 px-2 '>Home</a>
        </li>
        <li className='group hover:bg-slate-700 hover:transition duration-150 rounded-lg'>
          <a href="#" className='py-1 px-2'>To Do</a>
        </li>
        <li className='hover:bg-slate-700 hover:transition duration-150 rounded-lg'>
          <a href="#" className='py-1 px-2 '>Profile</a>
        </li>
      </ul>
    </header>
  )
}

export default Header
