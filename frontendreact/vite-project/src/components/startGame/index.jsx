import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setHost, updateLocalUser } from "../../actions";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"; 
import Western from '../Music/Sound/western.mp3'
import "./style.css"
const StartGame = () => {
	const answeringsound = new Audio(Western)
	answeringsound.volume = 1
	
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const socket = useSelector((state) => state.socket)
	const [username, setName] = useState("")
	const [room, setRoom] = useState("")

	const data = useSelector((state) => state.gameState)

	const handleCreate = () => {
		answeringsound.play()
		const playerInfo = {
			userID: socket.id,
			name: username,
			isHost: true,
			score: 0,
			icon: '/src/img/1-min.png',
			questionNo: 1
		}
		
		dispatch(setHost())
		socket.emit("create game", playerInfo)
		dispatch(updateLocalUser(playerInfo))
		navigate("/lobby")
	}

	const handleJoin = () => {
		answeringsound.play()
		const playerInfo = {
			userID: socket.id,
			name: username,
			isHost: false,
			score: 0,
			icon: '/src/img/1-min.png',
			questionNo: 1
		}
		socket.emit("join game", { room, playerInfo })
		dispatch(updateLocalUser(playerInfo))
		navigate("/lobby")

	}

	return (
		<div role="StartGame" className="start-game">
			<input
				className="usernameinput"
				type="text"
				name="username"
				value={username}
				placeholder="name"
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				className="usernameinput"
				type="text"
				name="room"
				value={room}
				placeholder="room code"
				onChange={(e) => setRoom(e.target.value)}
			/>
			<div className="joinbtns">
				<button className="joinbtn" onClick={handleJoin}>
					Join game
				</button>
				<Link onClick={handleCreate} to="/lobby" className="createbtn">
					Create game
				</Link>
			</div>
		</div>
	)
}

export default StartGame
