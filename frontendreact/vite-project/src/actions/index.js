
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

const updateLocalUser = (user) => {
	return {
		type: "UPDATE_USER",
		payload: user,
	}
}

const updateScore = (user, score) => {
    return {
        type: 'UPDATE_SCORE',
        "user": user,
        "score": score
    }
}

const setCompleted = (user) => {
	return {
		type: "COMPLETE_QUIZ",
		payload: user,
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

const addMessage = (message) => {
	return {
		type: "ADD_MSG",
		payload: message
	}
}

export {  leaveRoom, storeSocket, changeState ,updateLocalUser, updateScore, setCompleted, incrementQuestionNumber,  setQuizAsComplete, loadData,clearData, setHost, addMessage }
