import { useEffect, useState } from "react";

import { type UserToDo,type UserToDosList } from "../../../packages/types/todo.types";

import TaskBar from "./TaskBar/TaskBar";
import NewTask from "./NewTask/NewtTask";
import ToDoTask from "./ToDoTask/ToDoTask";

const mocktodos: UserToDo = {
  id: "mocktodos",
  userTasks: [
    {
      id: "mocktodos",
      title: "mocktodos",
      description: "mocktodo",
    },
    {
      id: "mocktodos",
      title: "mockt",
      description: "mocktodos2",
    }
  ],
};

export default function ToDo() {

  const [newTask, setNewTask] = useState(false);
  const [task, setTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState<string[]>(["",""]);
  const [todos, setTodos] = useState<UserToDosList>(mocktodos);

  useEffect(() => {}, [mocktodos.userTasks])
  
  return (
    <section className="text-white flex">
      <TaskBar newTask={setNewTask} showTask={setTask} setTitle={setTaskTitle} todos={todos} />
      {newTask && <NewTask savedTask={setNewTask} closeNewTask={setNewTask}  todos={todos} setTodos={setTodos}/>}
      {task && <ToDoTask closeTask={setTask} setCardInfo={taskTitle} />}
    </section>
  );
}
