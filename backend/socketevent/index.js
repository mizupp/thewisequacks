const {GameState} = require("../models/GameState")
const {io} = require("../initialiseServer")

function socketinitialise(socket){
    console.log("i am working globally");

    socket.on("disconnect", ()=> console.log("User has been disconnected"));

    socket.on("create game"), ({room, username, difficulty, host, questions}) => {
        console.log(`game with code ${room}`)
        const state = new GameState(category, difficulty, host, room, questions);
        io.to(room).emit("change state", state);
    }

    socket.on('join game', ({room, username}) => {
        console.log(`${username} joined with the code ${room}`);
        socket.join(room);
        socket.to(room).emit('user joining waiting room', username);
    })

    socket.on('send state to players', (state)=>{
        io.to(state.roomName).emit('change state', state);
    })
    
    socket.on('update player score', ({room, user, score}) => {
        socket.to(room).emit('update opponents score', {user, score});
        console.log(`updating score of ${user} in room: ${room} with a score of ${score}`);
    })

    socket.on('complete quiz', ({room, user}) => {
        io.to(room).emit('update opponent completion', user)
    })

    //game message feature
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    })
}

module.exports = {socketinitialise};