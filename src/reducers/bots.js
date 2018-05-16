const defaultState = {
	bots: [],
	currentBot: {}
}

export default function(state=defaultState, action){
	switch(action.type){
		// case "NEW_MATCH": 
		//  let botIndex = Math.floor(Math.random()*state.bots.length)
		//  return {...state, currentBot: state.bots[botIndex]}
		case "SET_BOT":
			return {...state, currentBot: action.payload}
		case "LOGIN_USER":
			let index = Math.floor(Math.random()*action.payload.bots.length)
			return {...state, bots: action.payload.bots, currentBot: action.payload.bots[index]}
		default: 
			return state
	}
}