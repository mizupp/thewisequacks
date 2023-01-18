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
			state.removePlayer(id)
			socket.to(roomName).emit('change state', state)
			console.log('Player left room')
		}
	
	})

	// listen for new game creation
	socket.on("create game", (playerInfo) => {
		try {
			const room = codeGenerator()
			const state = new GameState(room)
			state.addPlayer(playerInfo)
			games.push(state)
			socket.join(room)
			rooms.push(room)
			console.log(`Game created host: ${playerInfo.name} room: ${room}`)
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
			
			console.log(`${playerInfo.name} joined with the code ${room}`)
		} else {
			const errorMsg = "Room does not exist"
			console.log(errorMsg)
			socket.to(socket.id).emit('send error', errorMsg)
		}
	})

	// updates player information
	socket.on("update player", ({ playerInfo, room }) => {
		// get room gamestate
		const state = games[getIndex(room)]
		console.log("current state obj: ", state)
		//update server gamestate
		state.updatePlayer(playerInfo)
		//send new game state
		console.log('new state obj: ', state)
		io.to(room).emit("change state", state)
	})

	socket.on("update player score", ({ room, user, score }) => {
		socket.to(room).emit("update opponents score", { user, score })
		console.log(
			`updating score of ${user} in room: ${room} with a score of ${score}`
		)
	})

	socket.on("complete quiz", ({ room, user }) => {
		io.to(room).emit("update opponent completion", user)
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
		console.log("i wanna go home ")
		if (room) {
			console.log(message + room)
			io.emit("new-message", { user: socket.id, msg: message })
		} else {
			console.log(room)
			io.emit("new-message", { user: socket.id, msg: message })
		}
	})

	// const adapter = io.sockets.adapter
	// // const userid = userID => adapter.ids.get(userID);
	// const getRoom = roomID => adapter.rooms.get(roomID)
	// //create join delete
	// socket.adapter.on('create-room', (room) => {

	//     // if(adapter.ids.has(room))
	//     // return
	// console.log('Created new room', room)
	// console.log('comparison', socket.id);
	// })

	// socket.adapter.on('join-room', (room, id) => {
	//     if(id===room)
	//         return

	// const socket = getSocket(id);
	// const users = [...getRoom]
	// })
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

module.exports = { initialise }
