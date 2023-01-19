import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { leaveRoom } from "../../actions"
import "./style.css"
import { useNavigate } from 'react-router-dom';

const WaitingRoom = ({data}) => {
	const isHost = useSelector((state) => state.user.isHost)
	const socket = useSelector((state) => state.socket)
	const isGameStarted = useSelector((state) => state.gameState.isGameStarted)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	// console.log(data)


	function handleButtonClick() {
		socket.emit("start-game", data.room);
		navigate('/game')
	}

	function leaveJoin() {
		socket.emit('leave-session', (data.room))
		dispatch(leaveRoom())
		navigate('/')
	}

	


	function copyToClipBoard() {
		navigator.clipboard.writeText(data.room);
	  }

	return (
		<>
			<div className="flex flex-col">
				{data.users && <div className="codestuff flex flex-col">
					<div className="waiting-message">
						<h1>This is {data.users.find((p) => p.isHost == true).name}'s room </h1>
						<h2>Waiting for other players...</h2>
					</div> 
					<button className="codebtn" onClick={copyToClipBoard}>Copy Room Code: {data.room}</button>
				</div>}
				<br/>
				<div className="flex flex-row">
				{isHost && <button onClick={handleButtonClick} className="start-game-find btn start-game">
					START GAME
				</button>}

				{data.isGameStarted && <Navigate to="/game" />}
				<br/>
				<button onClick={leaveJoin} className="btn start-game start-game-find">
					LEAVE ROOM
				</button>
				</div>
			</div>
		</>
	)
}

export default WaitingRoom
