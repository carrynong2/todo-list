import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

type TaskProps = {
  id: string
  task: string;
  completed: boolean;
  isEditing: boolean;
  toggleComplete: (id: string) => void
  deleteTodo: (id: string) => void
  editTodo: (id: string) => void
}

const Todo = ({ task, completed, toggleComplete, id, deleteTodo, editTodo }: TaskProps) => {
  return (
    <div className="flex flex-row bg-purple-600 w-full py-4 justify-between px-4 mb-4 text-white">
      <p
        onClick={() => toggleComplete(id)}
        className={`cursor-pointer ${completed ? 'text-purple-300 line-through' : ''}`}
      >
        {task}
      </p>
      <div className='flex'>
        <FontAwesomeIcon className='pr-4 cursor-pointer' icon={faPenToSquare} onClick={() => editTodo(id)} />
        <FontAwesomeIcon className='cursor-pointer' icon={faTrash} onClick={() => deleteTodo(id)} />
      </div>
    </div>
  )
}

export default Todo