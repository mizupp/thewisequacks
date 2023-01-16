import React, {useState} from "react"
import { useSelector } from "react-redux"
import MyModal from "../../components/ModalButton"
import Instructions from "../../components/Instructions"
import HighScoreList from "../../components/HighScoresList"
import Createnewgame from "../../components/createnewgame"
import Timerbar from "../../components/Timerbar"

import { Link } from "react-router-dom"

const HomePage = () => {
	const socket = useSelector(state => state.socket)
	const [username, setUsername] = useState("");

	const handleJoinOpen = () => {
		// socket.emit('join game', ({username, room}));
		socket.emit('join game', user )
		console.log("disconnected");
	}


	return (
	<>
		<h1 className="text-4xl">Home Page</h1>
		<div>
			<MyModal Component={<Instructions/>} ButtonText="Instructions"/>
			<MyModal Component={<HighScoreList/>} ButtonText="High Scores"/>
			<input type="text"  placeholder="Enter your name"/>
			<button onClick={handleJoinOpen} className="btn">Join Game</button>		
			<Createnewgame />	
			<Timerbar />	

			</div>
	</>
	
		
	)
}

export default HomePage
