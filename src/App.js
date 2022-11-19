import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import './App.css'

import NewTodo from './components/NewTodo'

const App = () => {
  const [taskList, setTaskList] = useState([])

  const checkTask = (task) => {
    setTaskList(
      taskList.map((obj) =>
        task.id == obj.id ? (obj = { ...obj, checked: true }) : obj
      )
    )
  }

  const newTask = (task) => {
    setTaskList([
      ...taskList,
      {
        id: new Date().getTime(),
        title: task,
        checked: false,
      },
    ])
  }

  const removeTask = (task) => {
    setTaskList(taskList.filter((obj) => obj.id != task.id))
  }

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">TODO App</h1>
      </header>
      <section className="main">
        <NewTodo newTask={newTask} />
        <ul className="todo-list">
          {taskList.map((task) => (
            <li key={task.id}>
              <span
                className={['todo', task.checked ? 'checked' : ''].join(' ')}
                onClick={() => {
                  checkTask(task)
                }}
              >
                {task.title}
              </span>
              <button
                className="remove"
                onClick={() => {
                  removeTask(task)
                }}
              >
                <MdDelete size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default App
