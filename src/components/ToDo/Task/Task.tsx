import { TodoTask } from '../../../../packages/types/todo.types'

type Props = {
  task: TodoTask
}

export default function Task({ task }: Props) {
  return (
    <section className='border-2 flex justify-center py-1 rounded-md font-belanosima hover:bg-white hover:text-black transition duration-150 cursor-pointer text-lg'>
      {task.title}
    </section>
  )
}
