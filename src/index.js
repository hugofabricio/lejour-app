import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { StateMachineProvider, createStore } from 'little-state-machine'
import { DevTool } from 'little-state-machine-devtools'

import Layout from './components/Layout'

createStore({
  data: {},
})

ReactDOM.render(
  <React.StrictMode>
    <StateMachineProvider>
      <BrowserRouter>
        <Layout />
        {process.env.NODE_ENV !== 'production' && <DevTool />}
      </BrowserRouter>
    </StateMachineProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
