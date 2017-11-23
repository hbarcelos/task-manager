import React from 'react'
import ReactDOM from 'react-dom'

import TaskList from './TaskList.jsx'

ReactDOM.render(
  <TaskList tasks={[{id: 1, name: 'Foo'}, {id: 2, name: 'Bar'}]}/>,
  document.querySelector('#root')
)
