import { useState } from 'react';

function AddTodo({ handleAdd }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd(text);
        setText("");
    };

    return (
        <form className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-5 z-10" onSubmit={handleSubmit}>
            {/* Input Field */}
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task"
                className="p-2 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 glassmorphism placeholder:text-white w-full sm:w-auto"
            />

            {/* Add Button */}
            <button
                type="submit"
                className="px-4 py-2 bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transition transform hover:scale-105 glassmorphism title mt-4 sm:mt-0"
                disabled={text.trim()===''}
            >
                Add
            </button>
        </form>
    );
}

export default AddTodo;
