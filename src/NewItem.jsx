import React from 'react'

const NewItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li
            key={todo.id}
            className={`flex justify-between items-center p-2 border-b border-gray-400 ${todo.completed ? 'text-gray-500 opacity-60' : 'text-gray-200'}`}
        >
            <div className='flex justify-start gap-2 items-center '>
                <input type='checkbox' checked={todo.completed}
                    onChange={(e) => {
                        toggleTodo(todo.id, e.target.checked)
                    }}
                />
                <span>{todo.title}</span>
            </div>
            <div>
                <button className='p-2 text-sm rounded-sm bg-red-400 text-gray-100 font-bold uppercase'
                    onClick={() => deleteTodo(todo.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    )
}

export default NewItem