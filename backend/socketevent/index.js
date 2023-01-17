const { GameState } = require('../models/GameState')
const { io } = require('../initialiseServer');

const games = []



function updateGame(room, state) {
    const gameNo = games.findIndex((g) => g.room === room);
    games[gameNo] = state;
 }

function codeGenerator() {
    const chars = "acdefhiklmnoqrstuvwxyz0123456789".split("");
    let result = "";
    for (let i = 0; i < 6; i++) {
      const x = Math.floor(Math.random() * chars.length);
      result += chars[x];
    }
    return result;
  }


  
function initialise(socket){

    
    
    socket.on('leave', ()=>console.log('user disconnected'));


    // listen for new game creation
    socket.on('create game', (playerInfo) => {
        console.log(playerInfo)
        const room = codeGenerator();
        const state = new GameState(room);
        state.addPlayer(playerInfo)
        games.push(state)
        socket.join(room);
        console.log(`Game created host: ${playerInfo.name} room: ${room}`)
        io.to(room).emit('change state', state); //this sends to everyone in room including sender
    })

    // listen for game join
    socket.on('join game', ({room, playerInfo}) => {
        games[GameState.getIndex(room)].addPlayer(playerInfo)
        socket.join(room);
         console.log(`${playerInfo.name} joined with the code ${room}`);
        socket.to(room).emit('change state', state);
        // socket.to(room).emit('user joining waiting room', playerInfo.name);
    })

    // updates player information
    socket.on('update player', ({playerInfo, room}) => {
        // get room gamestate
        //update server gamestate
        //send new game state
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
            console.log (message + room)
                io.emit('new-message', {user: socket.id, msg: message})
         }
         else{
            console.log (room);
            io.emit('new-message', {user: socket.id, msg: message})
         }
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