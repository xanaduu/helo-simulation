const LOGIN = 'LOGIN'
const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME'
const UPDATE_LASTNAME = 'UPDATE_LASTNAME'
const UPDATE_GENDER = 'UPDATE_GENDER'
const UPDATE_HAIRCOLOR = 'UPDATE_HAIRCOLOR'
const UPDATE_EYECOLOR = 'UPDATE_EYECOLOR'
const UPDATE_HOBBY = 'UPDATE_HOBBY'
const UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY'
const UPDATE_BIRTHMONTH = 'UPDATE_BIRTHMONTH'
const UPDATE_BIRTHYEAR = 'UPDATE_BIRTHYEAR'


const initialState = {
  user: {
    auth0_id: null,
    picture: 'https://c1.staticflickr.com/7/6107/6381966401_032df5fe1e_b.jpg',
    firstname: 'Alex', 
    lastname: 'Minnick', 
    gender: null, 
    hair_color: null,
    eye_color: null, 
    hobby: null, 
    birth_day: null, 
    birth_month: null, 
    birth_year: null,
    friends: {}
  }
}

export const login = user => {
  return {
    type: LOGIN,
    payload: user
  }
}

export const updateFirstname = name => {
  return {
    type: UPDATE_FIRSTNAME,
    payload: name
  }
}

export const updateLastname = name => {
  return {
    type: UPDATE_LASTNAME,
    payload: name
  }
}

export const updateGender = gender => {
  return {
    type: UPDATE_GENDER,
    payload: gender 
  }
}

export const updateHairColor = hair => {
  return {
    type: UPDATE_HAIRCOLOR,
    payload: hair
  }
}

export const updateEyeColor = eyes => {
  return {
    type: UPDATE_GENDER,
    payload: eyes
  }
}

export const updateHobby = hobby => {
  return {
    type: UPDATE_HOBBY,
    payload: hobby
  }
}

export const updateBirthDay = day => {
  return {
    type: UPDATE_BIRTHDAY,
    payload: day 
  }
}

export const updateBirthMonth = month => {
  return {
    type: UPDATE_BIRTHMONTH,
    payload: month
  }
}

export const updateBirthYear = year => {
  return {
    type: UPDATE_BIRTHYEAR,
    payload: year
  }
}

export default (state = initialState, action) => {
  const { payload } = action
  switch(action.type) {
    case LOGIN:
      return { ...state, user: payload }
    case UPDATE_FIRSTNAME: 
      return { ...state, user: { ...state.user, firstname: payload } }
    case UPDATE_LASTNAME: 
      return { ...state, user: { ...state.user, lastname: payload } }
    case UPDATE_GENDER: 
      return { ...state, user: { ...state.user, gender: payload } }
    case UPDATE_HAIRCOLOR: 
      return { ...state, user: { ...state.user, hair_color: payload } }
    case UPDATE_EYECOLOR: 
      return { ...state, user: { ...state.user, eye_color: payload } }
    case UPDATE_HOBBY: 
      return { ...state, user: { ...state.user, hobby: payload } }
    case UPDATE_BIRTHDAY: 
      return { ...state, user: { ...state.user, birthday: payload } }
    case UPDATE_BIRTHMONTH: 
      return { ...state, user: { ...state.user, birthmonth: payload } }
    case UPDATE_BIRTHYEAR: 
      return { ...state, user: { ...state.user, birthyear: payload } }
    default:
      return state
  }
}