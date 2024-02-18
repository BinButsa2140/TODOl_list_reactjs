'use client';

import React, { useState, useContext } from 'react';
import Display from './Display';
import Input from './Input';
import { TaskContext } from '../page';

export default function Wrappage() {
  const {alltasks, setAllTasks} = useContext(TaskContext)

  const [toggleDiaplay, setToggleDiaplay] = useState(true);
  const [panelLayout, setPanelLayout] = useState('hidden');
  const [display, setDisplay] = useState('col-span-2');

  function toggle() {
    setToggleDiaplay(!toggleDiaplay);
    setPanelLayout((prevlayout) => (prevlayout === 'grid' ? 'hidden' : 'grid'));
    setDisplay((display) => (display === '' ? 'col-span-2' : ''));
  }

  return (
    <div className="">
      <button
        className="uppercase border-2 p-2 bottom-6 right-6 fixed transition-all font-bold
        duration-500 rounded-md hover:bg-blue-400   
        hover:font-bold 
        hover:text-white 
        hover:-translate-y-2 "
        onClick={toggle}
      >
        Start task!
      </button>
      <div className={`wrap grid grid-cols-2 m-10`}>
        <div className={display}>
          <Display></Display>
        </div>
        <div className={`${panelLayout} transition-all transform`}>
          <Input></Input>
        </div>
      </div>
    </div>
  );
}