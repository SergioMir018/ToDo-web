import { TodoTask } from '../../../../packages/types/todo.types'

type Props = {
  task: TodoTask,
  isClicked: (showCard: boolean) => void
}

export default function Task({ task, isClicked }: Props) {
  return (
    <button className='border-2 flex justify-center py-1 rounded-md font-belanosima hover:bg-white hover:text-black transition duration-150 cursor-pointer text-lg'
    onClick={() => isClicked(true)}>
      {task.title}
    </button>
  )
}
