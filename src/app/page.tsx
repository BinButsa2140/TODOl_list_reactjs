'use client';

import { createContext, useContext, useState } from 'react';
import Wrappage from './Components/Wrappage';

export const TaskContext = createContext<{ alltasks: any, setAllTasks: React.Dispatch<React.SetStateAction<any>> }>({
  alltasks: {},
  setAllTasks: () => {},
});

export default function Home() {
  const [alltasks, setAllTasks] = useState<any>([]);
  return (
    <TaskContext.Provider value={{ alltasks, setAllTasks }}>
      <Wrappage></Wrappage>
    </TaskContext.Provider>
  );
}