import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { startGame } from "../../actions"
import { getState } from "../../actions"
import "./style.css"

const WaitingRoom = ({data}) => {
	const isHost = useSelector((state) => state.user.isHost)
	const socket = useSelector((state) => state.socket)
	const dispatch = useDispatch()
	console.log(data)



	function handleButtonClick() {
		dispatch(startGame())
		let newState = {
			...data,
			isGameStarted: true,
		}

		socket.emit("send state to players", newState)
		console.log(data)
	}

	return (
		<>
			<div>
				{data.users && <div>
					<div className="waiting-message">
						<h1>This is {data.users.find((p) => p.isHost == true).name}'s room </h1>
						<h2>Please wait for other players...</h2>
					</div>
					<p>Share room name to friends:</p>
					<div>
						<span>{data.room}</span>
					</div>
				</div>}
				{isHost && <button onClick={handleButtonClick} className="btn start-game">
					START GAME
				</button>}
				{data.isGameStarted && <Navigate to="/game" />}
			</div>
		</>
	)
}

export default WaitingRoom
