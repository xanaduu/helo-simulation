import React from 'react'
import ReactDOM from 'react-dom'
import '../src/styles/index.css'
import App from './components/App'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>
      , document.getElementById('root'))
