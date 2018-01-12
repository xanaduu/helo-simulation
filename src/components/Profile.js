import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateFirstname, updateLastname, updateGender, updateHairColor, updateEyeColor, updateHobby, updateBirthDay, updateBirthMonth, updateBirthYear } 
from '../reducer/reducer'

class Profile extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <select name="gender" id="gender">
          <option value='null'>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, { updateFirstname, updateLastname, updateGender, updateHairColor, updateEyeColor, updateHobby, updateBirthDay, updateBirthMonth, updateBirthYear } )(Profile)