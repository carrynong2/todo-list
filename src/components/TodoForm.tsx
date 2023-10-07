import React, { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(value)
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input className="outline-none bg-none border border-solid
       border-purple-700 px-4 py-2 mt-4 mb-8 w-72" type="text"
        placeholder="What is the task today"
        onChange={handleOnChange}
      />
      <button className="bg-purple-600 text-white border-none py-2 px-3 rounded
       cursor-pointer" type="submit">Add Task</button>
    </form>
  )
}

export default TodoForm