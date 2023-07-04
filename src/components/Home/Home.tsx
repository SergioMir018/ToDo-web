const Home = () => {
  return (
    <body className='h-screen flex justify-center text-white'>
      <article className='w-2/3 text-center flex flex-col items-center gap-5 mt-10'>
        <h1 className="text-6xl mb-5 font-belanosima-semibold">Welcome to this ToDo app</h1>
        <img src="../../../public/images/6926528.jpg" alt="An images that resembles the process of organizing a project" className="w-1/2 h-1/2" />
        <p className="text-2xl font-belanosima w-1/3">
          This is a To-Do app. Here you can register the tasks that you have pending to do and mark their completion once they are done.
        </p>
      </article>
    </body>
  )
}

export default Home
