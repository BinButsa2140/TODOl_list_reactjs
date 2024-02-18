import React, { useContext, useState } from 'react'
import { TaskContext } from '../page';
import PopupPost from './PopupPost';

export default function Display() {
  const {alltasks, setAllTasks} = useContext(TaskContext)
  const [toggle, setToggle] = useState(true)

  function showContent(target: EventTarget) {
    console.log(target)
  }

  return (
    <div className=" shadow-xl min-h-96 drop-shadow-xl border-2 rounded-md">
      <h1 className='capitalize font-mono font-thin absolute right-4 bottom-4 '>Your task</h1>
      <div className='flex flex-col w-full'>
      {alltasks.map((task: any, index: number) => {
        const contextLayout:String = 'hidden' 
        return(
          <div className="w-full flex flex-col">
            <button key={index} 
            onClick={(event) => {showContent(event.target)}}///////////////////
            className='border p-2 overflow-hidden m-2 rounded-lg flex justify-between'
            value={index}
            >
                <h1 className='font-bold text-left w-full overflow-hidden' key={index}>{task.title}</h1>
                <h1 className='w-full'>due {task.date}</h1>
                <input className='w-4 h-4 rounded-xl w-full' type="checkbox" name="" id="" />
            </button>
            <div className={`ms-4 rounded-xl ${contextLayout}`}>
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