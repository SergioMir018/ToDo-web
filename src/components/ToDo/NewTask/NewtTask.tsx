export default function NewTask() {
  return (
    <section className="text-white mt-[5rem] ml-[4rem] h-[47rem] rounded-xl w-[50rem] border">
      <h1 className="mt-[2rem] font-belanosima-semibold  inline-block ml-[43%] text-4xl">
        New Task
      </h1>
      <form
        action=""
        className="flex flex-col gap-2 ml-[2rem] mt-4 font-belanosima"
      >
        <ul>
          <li className="flex items-center">
            <p className="mr-2 text-2xl">Title:</p>
            <input type="text"
            className="task-inputs" />
          </li>
          <li className="flex items-center mt-4">
            <p className="mr-2 text-2xl">Title:</p>
            <input type="text-field"
            
            className="task-inputs" />
          </li>
        </ul>
      </form>
    </section>
  );
}
