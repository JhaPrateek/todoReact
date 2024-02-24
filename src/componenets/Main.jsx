import React, { useState } from 'react'

const Main = () => {

    const [inputValue,setInputValue]=useState("");
    const [tasks, setTasks] = useState([]);

    const handleAdd=()=>{
        setTasks([...tasks,inputValue]);
        setInputValue("");
    }
    const handleRemove = (indexToRemove) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(indexToRemove, 1);
        setTasks(updatedTasks);
    };

    const handleChange=(e)=>{
        setInputValue(e.target.value);
    }

  return (
    <div>
        <div className='bg-blue-600 w-2/3 my-20 mx-auto py-5 px-6'>
        <h1 className='font-bold text-3xl text-center mb-8'>Get Things Done!</h1>
            <form className='ml-16 mb-8' onSubmit={(e)=>e.preventDefault()}>
                <input className='w-3/4 p-2 outline-none rounded-l-lg' type="text" value={inputValue} onChange={handleChange} placeholder='new task...'/>
                <button className='bg-purple-900 text-white p-2 rounded-r-lg' onClick={handleAdd}>Add Task</button>
            </form>
            <ul>
                    {tasks.map((task, index) => 
                       <li className='text-2xl font-semibold text-white' key={index}><button onClick={()=>handleRemove(index)} className='bg-red-400 rounded-lg mr-3 text-sm py-1 px-2'>Remove</button> {task} </li>
                    )}
                </ul>
        </div>
    </div>
  )
}

export default Main
