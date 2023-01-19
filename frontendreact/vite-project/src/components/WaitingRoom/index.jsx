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

	

	return (
		<>
			<div>
				{data.users && <div>
					<div className="waiting-message">
						<h1>This is {data.users.find((p) => p.isHost == true).name}'s room </h1>
						<h2>Please wait for other players...</h2>
					</div><p>Share room name to friends:</p>
					<div>
						<span>{data.room}</span>
					</div>
				</div>}
				<br/>
				{isHost && <button onClick={handleButtonClick} className="btn start-game">
					START GAME
				</button>}

				{data.isGameStarted && <Navigate to="/game" />}
				<br/>
				<button onClick={leaveJoin} className="btn start-game">
					LEAVE ROOM
				</button>
			</div>
		</>
	)
}

export default WaitingRoom
