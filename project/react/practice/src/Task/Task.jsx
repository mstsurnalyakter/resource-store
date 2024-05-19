import React from 'react'
import Task1 from './Task1';
import './App.css'
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';

const Task = () => {
  return (
    <>
      <div className='todo'>
        <h3>Task1</h3>
        <Task1 task="Learning JavaScript" isDone={true}></Task1>
        <Task1 task="Learning React" isDone={false}></Task1>
      </div>

      <div className='todo'>
        <h3>Task2</h3>
        <Task2 task="Learning JavaScript" isDone={true}></Task2>
        <Task2 task="Learning React" isDone={false}></Task2>
      </div>

      <div className='todo'>
        <h3>Task3</h3>
        <Task3 task="Learning JavaScript" isDone={true}></Task3>
        <Task3 task="Learning React" isDone={false}></Task3>
      </div>

      <div className='todo'>
        <h3>Task4</h3>
        <Task4 task="Learning JavaScript" isDone={true}></Task4>
        <Task4 task="Learning React" isDone={false}></Task4>
      </div>
    </>
  );
}

export default Task