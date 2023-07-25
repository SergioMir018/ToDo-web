import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='absolute w-full font-belanosima text-xl text-white'>
        <ul className='flex justify-end bg-[#202026] gap-2 py-4 pr-4'>
          <li className='hover:bg-slate-600 hover:transition duration-150 active:bg-slate-700 rounded-lg'>
            <Link to="/ToDo-web/" className='py-1 px-2 '>Home</Link>
          </li>
          <li className='group hover:bg-slate-600 hover:transition duration-150 active:bg-slate-700 rounded-lg'>
            <Link to="/ToDo-web/to-do" className='py-1 px-2'>To Do</Link>
          </li>
          <li className='hover:bg-slate-600 hover:transition duration-150 active:bg-slate-700 rounded-lg'>
            <Link to="/ToDo-web/profile" className='py-1 px-2 '>Profile</Link>
          </li>
        </ul>
    </header>
  )
}

export default Header
