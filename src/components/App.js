import React, { Component } from 'react'
import '../styles/App.css'
import { Route, Redirect } from 'react-router-dom'
import Home from '../components/Home'
import Auth from '../components/Auth'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/(access_token.*)?" exact component={ Home } />
        <Route path="/auth" component={ Auth } />
      </div>
    )
  }
}

export default connect()(App)


// render={() => (
//   this.props.user ? <Home /> : <Redirect to="/auth" />
// )} />
