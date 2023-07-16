function Footer() {
  return (
    <footer className='absolute bottom-0 left-0 w-full text-white bg-[#202026] py-10'>
      <div className="w-full flex justify-center">
        <ul className="flex gap-10">
          <li>
            <a href="#" className="font-belanosima rounded-lg py-1 px-2 hover:bg-slate-600 transition duration-150 active:bg-slate-700">Terms</a>
            </li>
          <li>
            <a href="#" className="font-belanosima rounded-lg py-1 px-2 hover:bg-slate-600 transition duration-150 active:bg-slate-700">Privacy</a>
            </li>
          <li>
            <a href="#" className="font-belanosima rounded-lg py-1 px-2 hover:bg-slate-600 transition duration-150 active:bg-slate-700">Contact</a>
            </li>
          <li>
            <a href="#" className="font-belanosima rounded-lg py-1 px-2 hover:bg-slate-600 transition duration-150 active:bg-slate-700">Copyright</a>
            </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer