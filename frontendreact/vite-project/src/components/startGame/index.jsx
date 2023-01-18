
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { storeSocket, changeState, storeUser, updateLocalUser, updateScore, setCompleted } from "../../actions";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"; 

import "./style.css"
const StartGame = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const socket = useSelector((state) => state.socket)
	const [username, setName] = useState("")
	const [room, setRoom] = useState("")

	const data = useSelector((state) => state.gameState)

	const handleCreate = () => {
		const playerInfo = {
			userID: socket.id,
			name: username,
			isHost: true,
			score: 0,
			icon: ""
		}
		console.log(playerInfo)
		socket.emit("create game", playerInfo)
		dispatch(updateLocalUser(playerInfo))
		navigate('/lobby')
	}

	const handleJoin = () => {
		const playerInfo = {
			userID: socket.id,
			name: username,
			isHost: false,
			score: 0,
			icon: ""
		}
		socket.emit("join game", { room, playerInfo })
		dispatch(updateLocalUser(playerInfo))
		navigate('/lobby')
	}


    return(
        
        <div className="start-game">
            <input className="usernameinput" type="text" name="username" value={username} placeholder="name" onChange={(e) => setName(e.target.value)}/>
            <input className="usernameinput" type="text" name="room" value={room} placeholder="room code" onChange={(e) => setRoom(e.target.value)}/>
        <div className="joinbtns">    
            <button className="joinbtn" onClick={handleJoin}>Join game</button>     
            <Link onClick={handleCreate} to="/lobby" className="createbtn">Create game</Link>
            </div>
        </div>
    )
// =======
// 	return (
// 		<div className="flex flex-col">
// 			<input
// 				className="enterName"
// 				type="text"
// 				name="username"
// 				value={username}
// 				placeholder="name"
// 				onChange={(e) => setName(e.target.value)}
// 			/>
// 			<input
// 				type="text"
// 				name="room"
// 				value={room}
// 				placeholder="room code"
// 				onChange={(e) => setRoom(e.target.value)}
// 			/>

// 			<div>
// 				<button className="joincreate" onClick={handleJoin}>
// 					Join game
// 				</button>

// 				<button className="joincreate" onClick={handleCreate}>
// 					Create game
// 				</button>
// 			</div>
// 		</div>
// 	)

}

export default StartGame
