import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoNew from './component/todo/TodoNew'
import TodoData from './component/todo/TodoData'

const App = () => {
  const name = 'Duy Phạm';
  const age = '28';
  const dataAddress = {
    city : "Hanoi",
    country : 'Vietnam'
  }
  return (
    <>
      <div className='todo-container'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <div className='todo-title'>To Do Lists</div>
        <TodoNew/>
        <TodoData
          name = {name}
          age = {age}
          data = {dataAddress}
        />
      </div>
    </>
  )
}

export default App
