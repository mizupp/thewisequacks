const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const { Server: SocketServer } = require("socket.io")

const io = new SocketServer(server, {
	cors: {
		origin: "*",
		// origin: ["https://admin.socket.io"],
		credentials: true,
		methods: ["GET", "POST"],
	},
})

const { instrument } = require("@socket.io/admin-ui")
// instrument(io, {
//   auth: false,
//   mode: "development",
// });

instrument(io, {
	auth: false,
	namespaceName: "/custom",
	mode: "development",
})

module.exports = { server, io, app }
