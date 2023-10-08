import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
uuidv4();

type Todo = {
  id: string
  task: string;
  completed: boolean;
  isEditing: boolean;
};

const TodoWrapper = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todoText: string) => {
    const newTodo: Todo = { id: uuidv4(), task: todoText, completed: false, isEditing: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div className="mt-20 p-10 rounded-md bg-slate-600">
      <h1 className="text-center text-white font-bold text-3xl">Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => {
        return <Todo {...todo} key={index} toggleComplete={toggleComplete} />
      })}
    </div>
  );
};

export default TodoWrapper;