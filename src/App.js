import React, { useState } from 'react'
import './App.css'
import { MdDelete } from 'react-icons/md'

const App = () => {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  const onTaskChange = (e) => {
    setTask(e.target.value)
  }

  const submit = (task) => {
    setTaskList([
      ...taskList,
      {
        id: new Date().getTime(),
        title: task,
        checked: false,
      },
    ])
    setTask('')
  }

  const onTaskKeyDown = (e) => {
    if (e.key == 'Enter') {
      submit(e.target.value)
    }
    if (e.key == 'Escape') {
      setTask('')
    }
  }

  const checkTask = (task) => {
    setTaskList(
      taskList.map((obj) =>
        task.id == obj.id ? (obj = { ...obj, checked: true }) : obj
      )
    )
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
        <input
          className="new-todo"
          placeholder="O que precisa ser feito?"
          value={task}
          onChange={onTaskChange}
          onKeyDown={onTaskKeyDown}
        />
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
