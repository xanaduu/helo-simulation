import React, { Component } from 'react'
import Auth0Lock from 'auth0-lock'
import axios from 'axios'
import { connect } from 'react-redux'
import { login } from '../reducer/reducer'

class Auth extends Component {
  constructor() {
    super()
    this.lock = null
    this.login = this.login.bind(this)
  }

  componentDidMount() {
    const { login, history } = this.props

    console.log(this.props)
    this.lock = new Auth0Lock(
      process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN
    )
    this.lock.on('authenticated', authResult => {
      this.lock.getUserInfo(authResult.accessToken, (error, user) => {
        console.log(user)
        axios.post('/api/auth/login', { userId: user.sub })
        .then(r => {
          console.log(r)
          login(r.data.user)
          history.push("/")
        })
        .catch(err => console.error(err))
      })
    })
  }
        
        

  login() {
    this.lock.show()
  }

  render() {
    return (
      <div className='Auth'>
        <button onClick={() => this.login()}>Login / Register</button>
      </div>
    );
  }
}

export default connect(null, { login })(Auth)