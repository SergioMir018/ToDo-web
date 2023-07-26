export type TodoTask =  {
  id: string,
  title: string,
  description: string,
  childrenTasks?: Array<TodoTask>
}

export type UserToDo = {
  id: string,
  userTasks: Array<TodoTask>
}