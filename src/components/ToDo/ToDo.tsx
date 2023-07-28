import { useEffect, useState } from "react";

import TaskBar from "./TaskBar/TaskBar";
import NewTask from "./NewTask/NewtTask";
import ToDoTask from "./ToDoTask/ToDoTask";

export default function ToDo() {
  
  const [newTask, setNewTask] = useState(false);
  const [task, setTask] = useState(false);

  useEffect(() => {
    console.log(task);
  }, [task]);
  

  return (
    <section className="text-white flex">
      <TaskBar newTask={setNewTask} showTask={setTask} />
      {newTask && <NewTask savedTask={setNewTask} />}
      {task && <ToDoTask closeTask={setTask} />}
    </section>
  );
}
