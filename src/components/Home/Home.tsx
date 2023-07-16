function Home() {
  return (
    <article className="flex flex-col items-center">
      <h1 className="text-7xl mb-5 mt-8 text-white font-belanosima-semibold">Welcome to this <span className="bg-gradient-to-r text-transparent bg-clip-text from-indigo-500 via-purple-500 to-pink-500 animate-pulse animate-infinite animate-duration-[5000ms] animate-ease-in animate-alternate animate-fill-backwards">ToDo</span> app</h1>
      <div className="flex mt-4 py-5">
        <img src="./images/6926528.webp" width="384" height="384" alt="An images that resembles the process of organizing a project" className="max-h-96 shadow-2xl shadow-slate-900 translate-x-24 rounded-xl z-10 animate-fade-right animate-once animate-duration-[1200ms]" />
        <ul className="-translate-y-6 -translate-x-36">
          <li className="pl-80 bg-slate-600 p-2 rounded-lg pt-6 pb-2 mb-3 text-center animate-fade-left animate-once animate-duration-[1200ms] animate-delay-200">
            <p className="font-belanosima text-xl text-white -translate-y-2 -translate-x-32">
              This is a <span className="text-sky-500">To-Do app</span>. Here you can register the <br /> tasks that you have pending to do and mark  their <br /> completion once they are done.
            </p>
          </li>
          <li className="pl-80 bg-slate-600 py-4 rounded-lg mb-3 text-center animate-fade-left animate-once animate-duration-[1200ms] animate-delay-300">
            <p className="font-belanosima text-xl text-white -translate-x-32">
              <span className="text-sky-500">Don't let your to-do list overwhelm you</span>. Our app <br /> helps you break down your tasks into manageable   <br /><span className="text-sky-500">steps</span>, so you can tackle them one at a time <br /> and feel a sense of accomplishment along the   way.
            </p>
          </li>
          <li className="pl-80 bg-slate-600 pt-2 pb-7 rounded-lg text-center animate-fade-left animate-once animate-duration-[1200ms] animate-delay-500">
            <p className="font-belanosima text-xl text-white -translate-x-32 translate-y-2">
              <span className="text-sky-500">Simplify your life</span> with our to-do app. Say goodbye <br /> to cluttered notebooks and sticky notes - our app <br /> gives you a clean and streamlined way to manage <br /> your tasks and <span className="text-sky-500">stay organized</span>.
            </p>
          </li>
        </ul>
      </div>
      <section className="flex items-center gap-4">
        <h2 className="text-white font-belanosima text-xl">Are you <strong className="bg-gradient-to-r text-transparent   bg-clip-text from-indigo-500 via-purple-500 to-pink-500">new</strong> ?</h2>
        <div className="py-1 px-3 cursor-pointer select-none rounded-lg border-2 group active:border-purple-500 active:bg-gray-700 hover:bg-slate-50 transition duration-150">
          <a href="#" className="text-white font-belanosima-semibold group-hover:text-black transition duration-150  group-active:text-white">
            <strong>Register</strong>
          </a>
        </div>
        <span className="text-white font-belanosima text-lg"> or </span>
        <div className="py-1 px-3 cursor-pointer select-none rounded-lg border-2 group active:border-purple-500 active:bg-gray-700 hover:bg-slate-50 transition duration-150">
          <a href="#" className="text-white font-belanosima-semibold group-hover:text-black transition duration-150 group-active:text-white">
            <strong>Sing in</strong>
          </a>
        </div>
      </section>
    </article>
  )
}

export default Home