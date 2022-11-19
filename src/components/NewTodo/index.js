import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.css'

const NewTodo = ({ newTask }) => {
  const [task, setTask] = useState('')

  const onTaskChange = (e) => {
    setTask(e.target.value)
  }

  const submit = (task) => {
    newTask(task)
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

  return (
    <input
      className="new-todo"
      placeholder="O que precisa ser feito?"
      value={task}
      onChange={onTaskChange}
      onKeyDown={onTaskKeyDown}
    />
  )
}

NewTodo.propTypes = {
  newTask: PropTypes.func.isRequired,
}

export default NewTodo
