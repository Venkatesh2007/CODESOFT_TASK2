import { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import './index.css';

function App() {
  const [Todos, setTodos] = useState(() => {
    // Load todos from local storage if available
    const savedTodos = localStorage.getItem('Todos');
    return savedTodos ? JSON.parse(savedTodos) : [
      { id: 1, text: "Complete Todo App", completed: false },
      { id: 2, text: "Complete DSA", completed: false },
    ];
  });

  useEffect(() => {
    // Save todos to local storage whenever they change
    localStorage.setItem('Todos', JSON.stringify(Todos));
  }, [Todos]);

  const handleAdd = (todo) => {
    setTodos([...Todos, {
      id: Todos.length ? Todos[Todos.length - 1].id + 1 : 1,
      text: todo,
      completed: false
    }]);
  };

  const handleCheck = (id) => {
    setTodos(Todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const handleDelete = (id) => {
    setTodos(Todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-5 relative">
      <div className="bg-gradient"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <h1 className="md:text-5xl sm:text-3xl font-bold mb-5 z-10 title p-2 text-white">Todos</h1>
      <h1 className="md:text-xl sm:text-lg font-bold mb-10 z-10 handwritten p-1">"Empower Your Productivity, One Task at a Time"</h1>
      <Todo Todos={Todos} handleCheck={handleCheck} handleDelete={handleDelete} />
      <AddTodo handleAdd={handleAdd} />
    </div>
  );
}

export default App;
