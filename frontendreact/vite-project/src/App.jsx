import React, { createContext, useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Layout from "./components/layout"
import ChatLayout from "./components/ChatLayout"
import Chat from "./components/Chat"
import { Routes, Route, Outlet, Link } from "react-router-dom"
import { HomePage, Game, Winner, Lobby } from "./pages"
import NotFound from "./pages/NotFound"

//darkmode
// import "./back.styl"
//lightmode
import "./back3.styl"


import { io } from "socket.io-client"
import { changeState, updateScore, storeSocket, setHost, addMessage } from "./actions"

const ENDPOINT = "http://localhost:3000"

const socketend = io(ENDPOINT)
export const SocketContext = createContext(socketend)

function App() {
	// const [socket, setSocket] = useState()
	const dispatch = useDispatch()
	const clientUser = useSelector((state) => state.user)
	const host = useSelector((state) => state.gameState.host)
	// const gameState = useSelector((state) => state.gameState)

	useEffect(() => {
		const newSocket = io(ENDPOINT)
		newSocket.on("change state", (state) => {
			dispatch(changeState(state))
		})
		newSocket.on("disconnecting", () => {
			console.log("on disconnect event triggered: ", socket)
			socket.emit("leave room", {
				room: gameState.room,
				playerInfo: clientUser,
			})
			socket.leave(gameState.room)
		})
		newSocket.on("change state", (state) => changeState(state))
		newSocket.on("make host", () => setHost())
		newSocket.on("new-message", ({ user, msg }) => {
			dispatch(addMessage({ sender: user || "Anonymous", text: msg }))
		})
		dispatch(storeSocket(newSocket))
		// setSocket(newSocket)
		return () => {
			newSocket.offAny()
		}
	}, [])


  return (
    <>
    {/* <div className='h-screen flex flex-col justify-between'> */}

    <div className='h-screen flex flex-col justify-between'>
	<div className="ribbon ribbon-top-left"><span>BETA</span></div>

	  <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<ChatLayout />}>
            <Route path="game" element={<Game />} />
            <Route path="lobby" element={<Lobby />} />
            <Route path="winner" element={<Winner />} />
			<Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>    
    </div>
  
    </>
  )
}

export default App
