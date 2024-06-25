import React from 'react'
import NewItem from './NewItem'

const NewList = ({ todos, toggleTodo,deleteTodo }) => {
  return (
      <ul className='w-full max-w-[500px] m-auto'>
          {todos.length === 0 && <li className='text-gray-200 text-center'>No todos</li>}
          {todos.map((todo) => (
              <NewItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}  />
          ))}
      </ul>
  )
}

export default NewList