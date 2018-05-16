// export function login(resp){
//  return {
//    type: "LOGIN_USER", 
//    payload: resp
//  }
// }
const API_URL = "http://localhost:3000/api/v1"
const headers = { 
	"Content-Type": "application/json"
}

function authedHeaders(){
	return {
		...headers,
		"Authorization": localStorage.getItem("token")
	}
}
export function login(username, password){
	return (dispatch) => {
		return fetch(API_URL + "/login", {
			method: "POST",
			headers: headers,
			body: JSON.stringify({username, password})
		})
		.then(res => res.json())
		.then(userData => {
			console.log("LOGGING IN", userData)
			localStorage.setItem("token", userData.jwt)
			dispatch({
				type: "LOGIN_USER", 
				payload: userData
			})
		})
	}
}

export function signup(username, password){
	return (dispatch) => {
		return fetch(API_URL + "/signup", {
			method: "POST",
			headers: headers,
			body: JSON.stringify({username, password})
		})
		.then(res => res.json())
		.then(userData => {
			console.log("LOGGING IN", userData)
			localStorage.setItem("token", userData.jwt)
			dispatch({
				type: "LOGIN_USER", 
				payload: userData
			})
		})
	}
}

export function getUser(){

	const token = localStorage.getItem("token")
	return (dispatch) => {
		return fetch(API_URL + "/get_user", {
			headers: {
				"Authorization": token
			}
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

export function createMatch(bot_id){

	return (dispatch) => {
		return fetch(API_URL + "/bots/match", {
			method: "POST",
			headers: authedHeaders(),
			body: JSON.stringify({bot_id})
		})
		.then(res => res.json())
		.then(match => {
			dispatch({type: "NEW_MATCH", payload: match})
		})
	}
}

export function deleteMatch(match_id){
	return (dispatch) => {
		return fetch(API_URL + "/bots/delete_match", {
			method: "POST",
			headers: authedHeaders(),
			body: JSON.stringify({match_id})
		})
		.then(res => res.json())
		.then(message => {
			dispatch({type: "DELETE_MATCH", payload: match_id})
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

export function logout(){
	localStorage.removeItem("token")
	return {
		type: "LOGOUT"
	}
}

export function selectViewedBot(bot){
	return {
		type: "SET_BOT",
		payload: bot
	}
}