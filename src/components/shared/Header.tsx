const Header = () => {
  return (
    <header className='font-belanosima text-xl text-white'>
      <ul className='flex justify-end bg-[#202026] gap-2 py-4 pr-4'>
        <li className='hover:bg-slate-600 hover:transition duration-150 active:bg-slate-700 rounded-lg'>
          <a href="#" className='py-1 px-2 '>Home</a>
        </li>
        <li className='group hover:bg-slate-600 hover:transition duration-150 active:bg-slate-700 rounded-lg'>
          <a href="#" className='py-1 px-2'>To Do</a>
        </li>
        <li className='hover:bg-slate-600 hover:transition duration-150 active:bg-slate-700 rounded-lg'>
          <a href="#" className='py-1 px-2 '>Profile</a>
        </li>
      </ul>
    </header>
  )
}

export default Header
