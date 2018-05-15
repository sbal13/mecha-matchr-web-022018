// export function login(resp){
//  return {
//    type: "LOGIN_USER", 
//    payload: resp
//  }
// }
const API_URL = "http://localhost:3000/api/v1"
const headers = { "Content-Type": "application/json"}

export function login(username, password){
  return (dispatch) => {
    fetch(API_URL + "/login", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({username, password})
    })
    .then(res => res.json())
    .then(userData => {
      dispatch({
        type: "LOGIN_USER", 
        payload: userData
      })
    })
  }
}

export function createMatch(bot_id, user_id){
  return (dispatch) => {
    return fetch(API_URL + "/bots/match", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({bot_id, user_id})
    })
    .then(res => res.json())
    .then(match => {
      dispatch({type: "NEW_MATCH", payload: match})
    })
  }
}

export function getBots(){
  return (dispatch) => {
    return fetch(API_URL + "/bots")
    .then(res => res.json())
    .then(bots => {
      dispatch({type: "GET_BOTS", payload: bots})
    })
  }
}

export function selectViewedBot(bot){
  return {
    type: "SET_BOT",
    payload: bot
  }
}