import React from 'react'
import { useState } from 'react'
// import { useEffect } from 'react'
import { MdDeleteSweep } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";


const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const hundleInput = (e) => {
    setInput(e.target.value);
  }
  const hundleOnClick = (e) => {
    e.preventDefault();
    const upperInput = input.toLocaleUpperCase().trim();
    setTodos([...todos, upperInput]);
    setInput('');
  }
  const deleteTodo = (i) => {
    let newTodos = todos.filter((todo, index) => index !== i);
    setTodos(newTodos);
  };

  const handleDeleteAll = () =>{
    if (todos.length === 0){
      alert('There is no todo to delete');
      return;
    }
    setTodos([]);
  };

  return (
    <div className='h-screen w-screen flex flex-col items-center justify-start bg-zinc-800 text-zinc-400'>
      <div className='mt-8 md:w-2/6 w-[90%] shadow-lg shadow-zinc-400/20  bg-zinc-600 px-8 py-8 rounded-2xl overflow-hidden'>
        <h1 className='text-4xl font-semibold my-8 text-center'>TODO-APP</h1>
        <form onSubmit={hundleOnClick}>
        <div className='my-4 w-full'> 
          <input
            className='bg-zinc-700 p-3 rounded-lg w-full hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-cyan-700'
            type="text"
            value={input}
            placeholder=' Enter Your Todo Here '
            onChange={hundleInput}
            required
            />
        </div>
        <div className='mt-8'>
          <input type='submit'
          className='w-full bg-zinc-700 py-3 rounded-lg hover:bg-zinc-900 text-zinc-400' 
          value={'Add Todo'}
          />
        </div>
        </form>
        <div className='mt-12 overflow-y-scroll mix-blend-overlay h-30 overflow-hidden'>
          {todos[0]?todos.map((todo, i) => <div className='flex justify-between text-md bg-zinc-800 mt-3 rounded-md p-2 text-white'>
            <p>{todo}</p><AiFillDelete size={'18vfgthhhhhhpx'} onClick={()=>deleteTodo(i)} /></div>) : <p className='text-lg font-semibold text-zinc-900'>There is no todo yet ! </p>}
        </div>
        <div>
          <button className='mt-8 p-2 w-full bg-red-700 rounded-lg text-white'onClick={handleDeleteAll}>Delet All</button>
        </div>
      </div>
    </div>
  )
}

export default App
