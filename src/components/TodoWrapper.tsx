import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
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

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, isEditing: !todo.isEditing
    } : todo
    ))
  }

  const editTask = (task: string, id: string) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, task, isEditing: !todo.isEditing
    } : todo
    ))
  }

  return (
    <div className="mt-20 p-10 rounded-md bg-slate-600">
      <h1 className="text-center text-white font-bold text-3xl">Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} {...todo} />
        ) : (
          <Todo {...todo} key={todo.id} toggleComplete={toggleComplete}
            deleteTodo={deleteTodo} editTodo={editTodo} />
        )
      )}
    </div>
  );
};

export default TodoWrapper;