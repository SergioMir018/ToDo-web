import { useState } from "react";

import TaskBar from "./TaskBar/TaskBar";
import NewTask from "./NewTask/NewtTask";

export default function ToDo() {
  
  const [newTask, setNewTask] = useState(false);

  return (
    <section className="text-white flex">
      <TaskBar newTask={setNewTask} />
      {newTask && <NewTask savedTask={setNewTask} />}
    </section>
  );
}
