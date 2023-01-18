
const storeSocket = (socket) => {
	return {
		type: "STORE_SOCKET",
		payload: socket,
	}
}

const changeState = (data) => {
	return {
		type: "CHANGE_GAME_STATE",
		payload: data,
	}
}

const storeUser = (user) => {
	return {
		type: "STORE_USER",
		payload: user,
	}
}

const updateLocalUser = (user) => {
	return {
		type: "UPDATE_USER",
		payload: user,
	}
}

const updateScore = (user, score) => {
	return {
		type: "UPDATE_SCORE",
		user: user,
		score: score,
	}
}

const setCompleted = (user) => {
	return {
		type: "COMPLETE_QUIZ",
		payload: user,
	}
}

const setIcon = (icon) => {
	return {
		type: "SET_ICON",
		payload: icon,
	}
}

const startGame = () => {
	return {
		type: "START_GAME",
	}
}

const incrementQuestionNumber = () => {
	return {
		type: "INCREMENT_QUESTION",
	}
}

const setQuizAsComplete = (user) => {
	return {
		type: "COMPLETE_QUIZ",
		payload: user,
	}
}

const getState = (socket) => {
	socket.on("change state", (state) => changeState(state))
}


const loadData = (data) => {
	return {
		type: "LOAD_DATA",
		payload: data,
	}
}

const clearData = (data) => {
	return {
		type: "LOAD_DATA",
	}
}

const setHost = () => {
	return {
		type: "SET_HOST",
		payload: true
	}
}

const leaveRoom = () => {
	return {
		type: "LEAVE_ROOM",
	}
}
export {  leaveRoom, storeSocket, changeState, storeUser,updateLocalUser, updateScore, setCompleted, setIcon, startGame, incrementQuestionNumber,  setQuizAsComplete, getState,loadData,clearData, setHost }
// =======
// export {
// 	storeSocket,
// 	changeState,
// 	storeUser,
// 	updateUser,
// 	updateLocalUser,
// 	updateScore,
// 	setCompleted,
// 	setIcon,
// 	startGame,
// 	incrementQuestionNumber,
// 	setQuizAsComplete,
// 	getState,
// 	loadData,
// 	clearData,
// 	// addUser,
// }
