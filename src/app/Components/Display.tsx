import React, { useContext } from 'react'
import { TaskContext } from '../page';

export default function Display() {
  const {alltasks, setAllTasks} = useContext(TaskContext)
  return (
    <div className=" shadow-xl min-h-96 drop-shadow-xl border-2 rounded-md">
      <h1 className='capitalize font-mono font-thin absolute right-4 bottom-4 '>Your task</h1>
      <div className='flex flex-col w-full'>
      {alltasks.map((task: any, index: number) => {
        return(
          <div className="w-full flex flex-col">
            <button key={index} className='border p-2 overflow-hidden m-2 rounded-lg flex justify-between'>
              <h1 className='font-bold text-left' key={index}>{task.title}</h1>
              <h1 >due {task.date}</h1>
              <input className='w-4 h-4 rounded-xl' type="checkbox" name="" id="" />
            </button>
            <div className="ms-4 rounded-xl hidden">
              <h1 className='ms-2'>
                {task.context}
              </h1>
            </div>
          </div>
        )
        })}
    </div>
    </div>
  )
}
