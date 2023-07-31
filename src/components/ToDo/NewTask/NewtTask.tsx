import { useCallback, useState } from "react";

import { ReactComponent as Close } from "../../../../public/Close.svg"
import { TodoTask, type UserToDosList } from '../../../../packages/types/todo.types';

type Props = {
  savedTask: (task: boolean) => void,
  closeNewTask: (task: boolean) => void,
  todos: UserToDosList
  setTodos: (todos: UserToDosList) => void,
};

export default function NewTask({ savedTask, closeNewTask, todos, setTodos }: Props) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [submitStatus, setSubmitStatus] = useState(true);

  const { userTasks } = todos;

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setDescription(event.target.value);
  };

  const handleSaveTask = useCallback(() => {

    if ( title != null ) {
      const newTask: TodoTask = {
        id: "fgsdf",
        title,
        description
      }

      setTodos({
        userTasks: [...userTasks, newTask]
      });

      savedTask(false);
    }
  }, [userTasks, title, description])

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
            <input name="title" value={title} onChange={handleTitleChange}  type="text" className="task-inputs" />
          </li>
          <li className="mt-10 ml-14">
            <textarea
              name="description"
              className="task-inputs w-[28rem] resize-none overflow-hidden"
              rows={1}
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Description..."
            />
          </li>
        </ul>
      </form>
      <button
        className="ml-[40%] mt-[1rem] w-[6rem] py-1 select-none rounded-lg border-2 active:border-purple-500 active:bg-gray-700 hover:bg-slate-50 text-white font-belanosima-semibold hover:text-black active:text-white  transition duration-150"
        type="submit"
        onClick={handleSaveTask}
      >
        Save Task
      </button>
    </section>
  );
}
