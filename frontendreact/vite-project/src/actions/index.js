const storeSocket = (socket) => {
    return {
        type: 'STORE_SOCKET',
        payload: socket
    }
}

const changeState = (data) => {
    return {
        type: 'CHANGE_GAME_STATE',
        payload: data
    }
}

const storeUser = (user) => {
    return {
        type: 'STORE_USER',
        payload: user
    }
}

const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

const updateScore = (user, score) =>{
    return{
        type: 'UPDATE_SCORE',
        user: user,
        score: score
    }
}

const setCompleted = (user) =>{
    return{
        type: "COMPLETE_QUIZ",
        payload: user
    }
}


const setIcon = (icon) => {
    return{
        type: "SET_ICON",
        payload: icon
    }
}



export { storeSocket, changeState, storeUser, addUser, updateScore, setCompleted, setIcon }