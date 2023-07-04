const Home = () => {
  return (
      <div className="flex flex-col items-center">
        <h1 className="text-7xl mb-5 mt-8 text-white font-belanosima-semibold">Welcome to this ToDo app</h1>
        <div className="flex mt-4 py-5">
        <img src="../../../public/images/6926528.webp" alt="An images that resembles the process of organizing a  project" className="max-h-96 translate-x-24 rounded-xl z-10 animate-fade-right animate-once animate-duration-[1200ms]" />
          <ul className="-translate-y-3 -translate-x-36">
          <li className="pl-80 bg-slate-600 p-2 rounded-lg pt-5 mb-3 text-end animate-fade-left animate-once animate-duration-[1200ms] animate-delay-200">
              <p className="font-belanosima text-xl text-slate-300">
              This is a To-Do app. Here you can register <br /> the tasks  that you have pending to do and <br /> mark  their   completion once they are done.
              </p>
            </li>
          <li className="pl-80 bg-slate-600 p-2 rounded-lg mb-3 text-end animate-fade-left animate-once animate-duration-[1200ms] animate-delay-300">
              <p className="font-belanosima text-xl text-slate-300">
              Don't let your to-do list overwhelm you. Our app <br /> helps you break down your tasks into manageable   <br />steps, so you can tackle them one at a time <br /> and feel a sense of accomplishment along the   way.
              </p>
            </li>
          <li className="pl-80 bg-slate-600 p-2 pb-6 rounded-lg text-end animate-fade-left animate-once animate-duration-[1200ms] animate-delay-500">
              <p className="font-belanosima text-xl text-slate-300">
              Simplify your life with our to-do app. Say goodbye <br /> to cluttered notebooks and sticky notes - our app <br /> gives you a clean and streamlined way to manage <br /> your tasks and stay organized.
              </p>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Home