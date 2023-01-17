const { GameState } = require('../models/GameState')
const { io } = require('../initialiseServer');

function initialise(socket){

    console.log('user connected');
    socket.on('leave', ()=>console.log('user disconnected'));

    // 1) you join for first time- auto host
    socket.on('create game', ({room, host, questions}) => {
        console.log(`game created with the code ${room}`);
        const state = new GameState(host, room, questions);
        socket.join(room);
        io.to(room).emit('change state', state); //this sends to everyone in room including sender
    })

     // 2) you join as another use - you  are not the host but you can become host of own game room or join original host
    socket.on('join game', ({room, playerInfo}) => {
        console.log(`${username} joined with the code ${room}`);
        state.addPlayer(playerInfo)
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


    //chat
    socket.on('chat-message', ({ room, message })=> {
        console.log('i wanna go home ');
         if(room) {
            console.log (message)
                io.to(room).emit('new-message', {user: socket.data, msg: message})
         }
         else{
            console.log (room);
            io.emit('new-message', {user: socket.data, msg: message})
         }
            //     
        
    });

    // socket.on('connection', (socket) => {
    //     console.log('bun you fam')
    //     socket.on('chat-message', ({ room, message }) => {
    //         io.sockets.emit('new-message', {user: data, msg: message})

    //         // if(room)
    //         //     io.to(room).emit('new-message', {user: data, msg: message})
                
    //         // else
    //         //     io.emit('new-message', {user: data, msg: message})
    //     })
    // })
}

module.exports = { initialise };