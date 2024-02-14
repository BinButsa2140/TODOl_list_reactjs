import React, { useContext, useState } from 'react'
import { TaskContext } from '../page';

export default function Input() {
  const {alltasks, setAllTasks} = useContext(TaskContext);

  const [task, setTask] = useState({
    title:'', date:'', context:'' 
  })

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAllTasks([...alltasks, task]);
    clearFrom()
    console.log(alltasks)
  }

  function clearFrom(){
    setTask({
      title: '',
      context: '',
      date: '',
    });
  } 
  return (
    <div className=' w-full shadow-xl h-96 p-5' >
        <h1 className='capitalize absolute right-4 bottom-4'>add task</h1>
        <form className='flex  flex-col m-2 gap-5 rounded-md' onSubmit={onSubmit}>
            <input id='Heading' className='w-1/2 p-2 rounded-lg shadow-md text-xl' 
              type="text" 
              placeholder='Header'
              value={task.title}
              onChange = {(event) => setTask({...task, title: event.target.value})}//doesn't work
              />

            <input id="date" 
            type="date" 
            name="" 
            value={task.date}
            onChange={(event) => setTask({...task, date: event.target.value})}
            />

            <textarea id="" 
              className='h-40 focus:outline-none overflow-y-scroll resize-none' 
              name="Context" 
              placeholder='Text'
              value={task.context}
              onChange={(event)=>setTask({...task, context: event.target.value})}
              >
              
            </textarea>
            <input id='submit' 
              className='shadow-2xl transition-all duration-500 rounded-md border w-20 p-2
              hover:bg-blue-400  
                hover:-translate-y-3
                hover:font-bold
                hover:text-white
            'type="submit" value="Submit"
            />
        </form>
    </div>
  )
}
function clearText(){
    
}
