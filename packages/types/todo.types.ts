export type ToDo =  {
  id: string,
  title: string,
  description: string,
  childrenTasks?: Array<ToDo>
}

export type UserToDo = {
  id: string,
  userTasks: Array<ToDo>
}