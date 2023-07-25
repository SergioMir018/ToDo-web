interface Props {
  newTask: (task: boolean) => void,
}

export default function TaskBar({ newTask }: Props) {
  return (
    <section className="bg-slate-600 w-[18rem] h-[45rem] mt-[6rem] ml-4 flex rounded-md">
      <button
        onClick={() => newTask( true ) }
        className=" mx-auto h-[3rem] mt-3 px-4 cursor-pointer select-none rounded-lg border-2 active:border-purple-500 active:bg-gray-700 hover:bg-slate-50 text-white font-belanosima-semibold hover:text-black active:text-white  transition duration-150"
      >
        + Add task
      </button>
    </section>
  );
}
