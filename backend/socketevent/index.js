const { GameState } = require("../models/GameState")
const { io } = require("../initialiseServer")

const games = []
const rooms = []

function getIndex(room) {
	const gameIndex = games.findIndex((g) => g.room === room)
	return gameIndex
}

function updateGame(room, state) {
	const gameNo = games.findIndex((g) => g.room === room)
	games[gameNo] = state
}

function codeGenerator() {
	const chars = "acdefhiklmnoqrstuvwxyz0123456789".split("")
	let result = ""
	for (let i = 0; i < 6; i++) {
		const x = Math.floor(Math.random() * chars.length)
		result += chars[x]
	}
	return result
}

function initialise(socket) {
	socket.on("disconnecting", () => {
		const iterator = socket.rooms.values()
		const id = (iterator.next().value)
		const roomName = (iterator.next().value)

		if (roomName) {
			const state = games[getIndex(roomName)]
			const response = state.removePlayer(id)
			if (response === "Host Removed") {
				io.to(state.users[0].userID).emit('make host')
				console.log(`New Host | ${state.users[0].name} in room ${roomName}`)
			}
			socket.to(roomName).emit('change state', state)
			console.log(`Player left | Room ${roomName}`)
		}
	})

	// listen for new game creation
	socket.on("create game", (playerInfo) => {
		try {
			const room = codeGenerator()
			const state = new GameState(room, socket.id)
			state.addPlayer(playerInfo)
			games.push(state)
			socket.join(room)
			rooms.push(room)
			console.log(`Game Created | host: ${playerInfo.name} room: ${room}`)
			io.to(room).emit("change state", state) //this sends to everyone in room including sender
		} catch (error) {
			const errorMsg = "Could not create game"
			console.log(error)
			socket.to(socket.id).emit('send error', errorMsg)
		}
	})

	// listen for game join
	socket.on("join game", ({ room, playerInfo }) => {
		//match??
		//includes
		if (rooms.includes(room)) {
			const state = games[getIndex(room)]
			state.addPlayer(playerInfo)
			socket.join(room)
			
			io.to(room).emit("change state", state)
			
			console.log(`Player Joined | ${playerInfo.name} in room ${room}`)
		} else {
			const errorMsg = "room does not exist"
			console.log(errorMsg)
			socket.to(socket.id).emit('send error', errorMsg)
		}
	})

	// updates player information
	socket.on("update player", ({ playerInfo, room }) => {
		// get room gamestate
		const state = games[getIndex(room)]
		
		//update server gamestate
		state.updatePlayer(playerInfo)
		console.log(`Player Updated | ${playerInfo.name} in room ${room} `)
		//send new game state
		
		io.to(room).emit("change state", state)
	})

	socket.on("start-game", (room) => {
		const state = games[getIndex(room)]
		state.startGame();
		console.log(`Game Started | room ${room}`)
		io.to(room).emit('change state', state)
	})

	socket.on('end game', (room) => {
		console.log(room)
		const state = games[getIndex(room)]
		state.endGame();
		console.log(`Game Ended | room ${room}`)
		io.to(room).emit('change state', state)
	})

	socket.on('update questions', ({room, questions}) => {
	console.log(`Questions Updated | room ${room}`)
	})

	//game message feature
	socket.on("chat", (data) => {
		io.sockets.emit("chat", data)
	})

	socket.on("typing", (data) => {
		socket.broadcast.emit("typing", data)
	})

	//chat
	socket.on("chat-message", ({ room, message }) => {
		
		if (room) {
			console.log(message + room)
			io.to(room).emit("new-message", { user: socket.id, msg: message })
		} else {
			console.log(room)
			io.emit("new-message", { user: socket.id, msg: message })
		}
	})

	socket.on("leave-session", (room) => {
		console.log("left room"+ room)
		const state = games[getIndex(room)]
			const response = state.removePlayer(socket.id)
			if (response === "Host Removed") {
				io.to(state.users[0].userID).emit('make host')
			}
			socket.leave(room)
			socket.to(room).emit('change state', state)
			console.log(`Player Left | Room  ${room}`)
	})

	
}

module.exports = { initialise }
