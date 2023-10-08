import React, { useState } from "react";

type TodoProps = {
  task: string
  id: string
  editTodo: (task: string, id: string) => void
}

const EditTodoForm = ({ editTodo, task, id }: TodoProps) => {
  const [value, setValue] = useState(task);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    value && editTodo(value, id);

    setValue("");
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input className="outline-none bg-none border border-solid
       border-purple-700 px-4 py-2 mt-4 mb-8 w-72" type="text"
        placeholder="Update Task"
        value={value}
        onChange={handleOnChange}
      />
      <button className="bg-purple-600 text-white border-none py-2 px-3 rounded
       cursor-pointer mb-4 hover:bg-purple-500" type="submit">Update Task</button>
    </form>
  )
}

export default EditTodoForm