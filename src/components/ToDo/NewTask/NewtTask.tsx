import { useState } from "react";

import { ReactComponent as Close } from "../../../../public/Close.svg"
import { UserToDo } from "../../../../packages/types/todo.types";

type Props = {
  savedTask: (task: boolean) => void,
  closeNewTask: (task: boolean) => void,
  todos: UserToDo
};

export default function NewTask({ savedTask, closeNewTask, todos }: Props) {
  const [description, setDescription] = useState("");
  const [submitStatus, setSubmitStatus] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setDescription(event.target.value);
  };

  const handleSaveTask = () => {
  }

  return (
    <section className="text-white mt-[5rem] ml-[4rem] h-[45.5rem] rounded-xl w-[40rem] border">
      <div className="z-10 flex justify-end">
        <button onClick={() => closeNewTask(false)}>
          <Close fill="white" />
        </button>
      </div>
      <h1 className="-mt-[1rem] font-belanosima-semibold flex justify-center text-4xl">
        New Task
      </h1>
      <form
        action=""
        className="flex flex-col gap-2 ml-[2rem] mt-8 font-belanosima"
        onSubmit={handleSaveTask}
      >
        <ul>
          <li className="flex items-center">
            <label className="mr-2 text-2xl">Title:</label>
            <input type="text" className="task-inputs" />
          </li>
          <li className="mt-10 ml-14">
            <textarea
              className="task-inputs w-[28rem] resize-none overflow-hidden"
              rows={1}
              value={description}
              onChange={handleChange}
              placeholder="Description..."
            />
          </li>
        </ul>
        <button
          className="ml-[40%] mt-[1rem] w-[6rem] py-1 select-none rounded-lg border-2 active:border-purple-500 active:bg-gray-700 hover:bg-slate-50 text-white font-belanosima-semibold hover:text-black active:text-white  transition duration-150"
          type="submit"
          onClick={() => {
            //submitStatus && savedTask(false)
            todos.userTasks.push({
              id: todos.id,
              title: "newTodo",
              description: "lorem ipsum dolor sit amet, consect"
            })
          }}
        >
          Save Task
        </button>
      </form>
    </section>
  );
}
