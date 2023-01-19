const initState = {
	gameState: {},
	user: {},
	socket: {},
	error: null,
	isHost: false,
	messages: []
	
}

const gameReducer = (state = initState, action) => {
	switch (action.type) {
		case "LOAD_DATA":
			return { ...state, ...action.payload }
		case "LEAVE_ROOM":
			return {...state, user: {}, gameState: {}, isHost: false}
		case "CLEAR_DATA":
			return initState
		case "STORE_SOCKET":
			return { ...state, socket: action.payload }
		case "CHANGE_GAME_STATE":
			return { ...state, gameState: action.payload }
		case "UPDATE_USER":
			return { ...state, user: action.payload }
		case "SET_HOST":
			return { ...state, isHost: action.payload }
		case "SET_ERROR":
			return {
				...state,
				error: action.payload,
			}
		case 'ADD_MSG':
			return {
				...state,
				messages: [...state.messages, action.payload]
			}
		default:
			return state
	}
}

export default gameReducer
