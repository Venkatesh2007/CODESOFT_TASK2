function Todo({ Todos, handleCheck, handleDelete }) {
    return (
        <div className="flex flex-col space-y-4 w-full max-w-md z-10">
            {Todos.map(todo => (
                <div
                    className={`p-4 rounded-lg shadow-lg flex justify-between items-center transition transform hover:scale-105 glassmorphism ${todo.completed ? 'bg-green-500' : 'bg-white'}`}
                    key={todo.id}>
                    <span
                        className={`cursor-pointer ${todo.completed ? 'line-through' : ''} font-serif`}
                        onClick={() => handleCheck(todo.id)}>
                        {todo.text}
                    </span>
                    <button
                        onClick={() => handleDelete(todo.id)}
                        className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition transform hover:scale-110 pacifico">
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Todo;
