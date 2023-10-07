import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

type TaskProps = {
  id: any
  task: string;
  completed: boolean;
  isEditing: boolean;
}

const Todo = ({ task }: TaskProps) => {
  return (
    <div className="flex flex-row bg-purple-600 w-full py-4 justify-between px-4 mb-4 text-white">
      <p>{task}</p>
      <div className='flex'>
        <FontAwesomeIcon className='pr-4 cursor-pointer' icon={faPenToSquare} />
        <FontAwesomeIcon className='cursor-pointer' icon={faTrash} />
      </div>
    </div>
  )
}

export default Todo