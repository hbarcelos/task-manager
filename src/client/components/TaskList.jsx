import React from 'react'
import Task from './Task.jsx'

export default ({ tasks = [] }) => {
  return (
    <ul className="task-list">
      {
        tasks.map(({ id, name, description, done }) => (
          <li key={id}>
            <Task
              id={id}
              name={name}
              description={description}
              done={done} />
          </li>
        ))
      }
    </ul>
  )
}
