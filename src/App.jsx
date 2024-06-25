import React, { useState } from 'react'
import { useEffect } from 'react'
import AddTodo from './AddTodo'
import NewList from './NewList'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const addNotify = () => toast("Task Added", {
    position: "bottom-right",
  });
  const deleteNotify = () => toast("Task Deleted", {
    position: "bottom-right",
  });
  const completeNotify = () => toast("Task Completed", {
    position: "bottom-right",
  });
  const inCompleteNotify = () => toast("Task Incompleted", {
    position: "bottom-right",
  });

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const addTodo = (title) => {
    setTodos(currentTodos => {
      return [
        { id: crypto.randomUUID(), title, completed: false },
        ...currentTodos,
      ]
    })
    addNotify();
  }

  const toggleTodo = (id, checked) => {
    setTodos(currentTodos => {
      const updatedTodos= currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: checked };
        }
        return todo;
      });
      return updatedTodos.sort((a, b) => a.completed - b.completed);
    });
    if (checked) {
      completeNotify();
    }
    else {
      inCompleteNotify();
    }
  }

  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
    deleteNotify();
  }

  return (
    <>
      <ToastContainer />
      <div className='w-full flex gap-4 flex-col'>
        <h1 className=' text-gray-100 text-2xl font-bold uppercase text-center'>React TODO App</h1>
        <AddTodo newTodo={addTodo} />
        <hr className='border-gray-400 my-4 w-full max-w-[500px] m-auto' />
        <h2 className='text-gray-100 text-2xl font-bold uppercase text-center'>
          Todo List
        </h2>
        <NewList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  )
}

export default App