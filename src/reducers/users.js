const defaultState = {
  currentUser: null,
  matches: []
}

export default function userReducer(state=defaultState, action){
  switch(action.type){
    case "NEW_MATCH":
      return {...state, matches: [...state.matches, action.payload]}
    case "LOGIN_USER":
      return {...state, currentUser: action.payload.user, matches: action.payload.matches}
    default: 
      return state
  }
}