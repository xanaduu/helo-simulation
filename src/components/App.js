import React, { Component } from 'react'
import '../styles/App.css'
import { Route, Redirect } from 'react-router-dom'
import Home from '../components/Home'
import Auth from '../components/Auth'
import Profile from '../components/Profile'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Route path="/auth" component={ Auth } /> 
        <Route path="/" exact component={ Home } /> 
        <Route path="/profile" component={ Profile } />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(App)

        {/* <Route path="/(access_token.*)?" exact render={() => (
          this.props.user ? <Home /> : <Redirect to="/auth" />
        )} />
        <Route path="/auth" component={ Auth } /> */}
