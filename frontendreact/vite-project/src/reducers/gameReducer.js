const initState = {
	gameState: {},
	user: {},
	icon: "",
	socket: {},
	error: null,
}

const gameReducer = (state = initState, action) => {
	switch (action.type) {
		case "LOAD_DATA":
			return { ...state, ...action.payload }
		case "CLEAR_DATA":
			return initState
		case "STORE_SOCKET":
			return { ...state, socket: action.payload }
		case "CHANGE_GAME_STATE":
			return { ...state, gameState: action.payload }
		case "UPDATE_USER":
			return { ...state, user: action.payload }
		case "START_GAME":
			return {
				...state,
				gameState: {
					...state.gameState,
					isGameStarted: true,
				},
			}
		case "INCREMENT_QUESTION":
			let newQuestionNumber = state.gameState.questionNumber + 1
			return {
				...state,
				gameState: { ...state.gameState, questionNumber: newQuestionNumber },
			}
		case "UPDATE_SCORE":
			let newUsers = [...state.gameState.users]
			let userIdx = newUsers.findIndex((item) => item.name === action.user)
			newUsers[userIdx].score += action.score
			return {
				...state,
				gameState: { ...state.gameState, users: newUsers },
			}
		case "SET_ICON":
			return { ...state, icon: action.payload }
		case "COMPLETE_QUIZ":
			let newUsersArr = [...state.gameState.users]
			let idx = newUsersArr.findIndex((item) => item.name === action.payload)
			newUsersArr[idx].hasCompletedQuiz = true
			return {
				...state,
				gameState: { ...state.gameState, users: newUsersArr },
			}
		case "SET_ERROR":
			return {
				...state,
				error: action.payload,
			}
		default:
			return state
	}
}

export default gameReducer
