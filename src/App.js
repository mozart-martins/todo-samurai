import React, { useState } from 'react'

import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'

const App = () => {
  const [taskList, setTaskList] = useState([])

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

  const updateTaskList = (taskList) => {
    setTaskList(taskList)
  }

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">TODO App</h1>
      </header>
      <section className="main">
        <NewTodo newTask={newTask} />
        <TodoList updateTaskList={updateTaskList} todoList={taskList} />
      </section>
    </section>
  )
}

export default App
