const LOGIN = 'LOGIN'

const initialState = {
  user: null
}

export const login = user => {
  return {
    type: LOGIN,
    payload: user
  }
}

export default (state = initialState, action) => {
  const { payload } = action
  switch(action.type) {
    case LOGIN:
      return { ...state, user: payload }
    default:
      return state
  }
}