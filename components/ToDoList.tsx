'use client'

import React, { useState } from 'react'

const ToDoList = () => {

    const [tasks, setTasks] = useState(["Go to the gym"])
    const [newTask, setNewTask] = useState("")

    const handleNewTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    const deleteTask = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    const moveTaskUp = (index: number) => {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const moveTaskDown = (index: number) => {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    
    return (
        <div className="flex justify-center gap-8 items-center flex-col m-10">
            <h1 className='text-4xl font-bold'>To-Do List</h1>
            <div className=''>
                <input className="bg-white text-black m-2 p-2 rounded" type="text" placeholder="Enter a task" value={newTask} onChange={handleNewTask}/>
                <button className="p-2 bg-green-400 text-white rounded" onClick={addTask}>Add</button>
            </div>
            <div>
                <ol>
                    {tasks.map((task: string, index: number) => (
                        <li key={index} className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-white text-black m-2 px-12 py-2 rounded-xl font-bold text-xl text-right">
                            <span className="p-2">{task}</span>

                            <button className="p-2 bg-red-600 rounded text-white" onClick={() => deleteTask(index)}>Delete</button>

                            <button className="p-2" onClick={() => moveTaskDown(index)}>🔽</button>

                            <button className="p-2" onClick={() => moveTaskUp(index)}>🔼</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default ToDoList