import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: this.props.firstname,
      lastname: this.props.lastname,
      picture: this.props.picture
    }
  }

  render() {
    const { firstname, lastname, picture } = this.state
    return (
      <div>
        <div>
          <Header name='Dashboard'/>
        </div>
        <div className='Home-parent'>
          <div className='Home-top-child'>
            <div>
              <div>
                { firstname }
              </div>
              <div>
                { lastname }
              </div>
              <div>
                <Link to="/profile"><button>Edit Profile</button></Link>
              </div>
              <div>
                <img className='Home-img-splash' src={ picture } alt="profile"/>
              </div>
            </div>
            <div></div>
          </div>
          <div className='Home-bottom-child'>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstname: state.user.firstname,
    lastname: state.user.lastname,
    picture: state.user.picture
  }
}

export default connect(mapStateToProps, null)(Home)