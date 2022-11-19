import React from 'react'
import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md'
import './style.css'

function TodoList({ updateTaskList, todoList }) {
  const checkTask = (task) => {
    updateTaskList(
      todoList.map((obj) =>
        task.id == obj.id ? (obj = { ...obj, checked: true }) : obj
      )
    )
  }

  const removeTask = (task) => {
    updateTaskList(todoList.filter((obj) => obj.id != task.id))
  }

  return (
    <ul className="todo-list">
      {todoList.map((task) => (
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
  )
}

TodoList.propTypes = {
  updateTaskList: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }).isRequired
  ),
}

export default TodoList
