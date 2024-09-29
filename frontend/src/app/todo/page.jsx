'use client'
import React,{useState} from 'react'

const TodoList = () => {

  const [todoList, setTodoList] =useState([])
  const addNewTodo = (e) => {
    if(e.code === "Enter" && e.target.value.trim() != ""){
      setTodoList([...todoList , e.target.value])
      console.log(todoList)
      e.target.value =""
    }
  }

  return (
    <div className='h-screen flex items-center flex-col mt-10'>
        <h1 className='text-4xl font-bold mb-8 text-gray-800'> MY TODO LIST</h1>

      <div className='w-full md:w-1/2 '>
        <input type='text' className='w-full border rounded-lg mb-4 items-center shadow-md p-3' placeholder='Add a New Task and Press Enter ' onKeyDown={addNewTodo}></input>
      </div>

      <div className='w-full md:w-1/2 bg-zinc-300 shadow-lg rounded-lg p-8'>
        {todoList.length ===0 ? (
          <p className='text-center text-gray-500'>No task yet. Add your first task</p>
          
        ) : (
          todoList.map((todo, index) => (
            <div key={index} className='flex justify-between items-center mb-3 p-2 rounded-lg bg-green-300'>
              <h4 className='text-lg font-semibold text-gray-800'>{todo}</h4>
              <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg'>Delete</button>
              
            </div>

          ))

        )}

      </div>
    </div>
  )
}

export default TodoList