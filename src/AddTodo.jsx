import React from 'react'
import { useState } from 'react'

const AddTodo = ({newTodo}) => {

    const [item, setItem] = useState('');
    const handleSubmit = () => (e) => {
        e.preventDefault();
        if (!item) return;
        newTodo(item);
        setItem('');
    }

  return (
      <form onSubmit={handleSubmit()} className='w-full max-w-[500px] m-auto'>
          <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className='w-full p-2 border bg-transparent text-gray-200 rounded-sm border-gray-400 mb-2'
              type='text'
              placeholder='New todo'
          />
          <button
              className='transition ease-in-out delay-150 p-2 rounded-sm bg-gray-600 hover:bg-gray-700  text-gray-100 font-bold uppercase'
          >
              Add Todo
          </button>
      </form>
  )
}

export default AddTodo