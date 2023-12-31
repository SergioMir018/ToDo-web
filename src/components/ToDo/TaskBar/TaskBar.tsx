import { useEffect, useState } from "react";
import {ReactComponent as AddTask}  from "../../../../public/AddCircle.svg";

import { type UserToDosList } from "../../../../packages/types/todo.types";
import Task from "../Task/Task";

interface Props {
  newTask: (task: boolean) => void,
  showTask: (selectedTask: boolean) => void,
  setTitle: (task: string[]) => void
  todos: UserToDosList
}

export default function TaskBar({ newTask, showTask, setTitle, todos }: Props) {

  const {userTasks} = todos;

  useEffect(() => {
    console.log(userTasks.length);
  }, [userTasks])

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section className="bg-slate-600 w-[18rem] h-[44.5rem] mt-[5.5rem] ml-4 flex rounded-md flex-col">
      <button
        onClick={() => newTask(true)}
        className=" mx-auto h-[3rem] mt-3 px-4 cursor-pointer select-none rounded-lg border-2 active:border-purple-500 active:bg-gray-700 hover:bg-slate-50 text-white font-belanosima-semibold hover:text-black active:text-white  transition duration-150 flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
      >
        <AddTask
          fill={isClicked ? "white" : isHovered ? "black" : "white"}
          height={30}
        />
        Add task
      </button>
      <div className="flex flex-col gap-3   mx-[2rem] mt-4">
        {userTasks.map((task, inx) => {
          return <Task key={inx} task={task} isClicked={showTask} setTaskTitle={setTitle} />
        })}
      </div>
      <style>
        {`
          .group:hover .fill-current {
            fill: black;
          }
        `}
      </style>
    </section>
  );
}
