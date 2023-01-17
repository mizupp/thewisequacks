
import React, {useState} from "react"
import { useSelector } from "react-redux"
// import MyModal from "../../components/ModalButton"
import MyModal from "../../components/Modal"

import Instructions from "../../components/Instructions"
import HighScoreList from "../../components/HighScoresList"
import Createnewgame from "../../components/createnewgame"
import Timerbar from "../../components/Timerbar"


import { Link } from "react-router-dom"

const HomePage = () => {
	const [instructionsOpen, setInstructionsOpen] = React.useState(false);
	const [highScoreListOpen, setHighScoreListOpen] = React.useState(false);

	const openInstructionsModal = () => {
		setInstructionsOpen(true);
	}

	const openHighScoreListModal = () => {
		setHighScoreListOpen(true);
	}

	const socket = useSelector(state => state.socket)
	const [username, setUsername] = useState("");

	const handleJoinOpen = () => {
		// socket.emit('join game', ({username, room}));
		socket.emit('join game', user )
		console.log("disconnected");
	}

	return (
	<>
	<Timerbar />	
		<h1 className="text-4xl">Home Page</h1>
		<div>
			<button
			type="button"
			onClick={openInstructionsModal}>
			Instructions
			</button>

			<button
			type="button"
			onClick={openHighScoreListModal}>
			High Score
			</button>

			<MyModal onClose={() => setInstructionsOpen(false)} Component={<Instructions/>} setOpen={instructionsOpen} />
			<MyModal onClose={() => setHighScoreListOpen(false)} Component={<HighScoreList/>} setOpen={highScoreListOpen} />
			<input type="text"  placeholder="Enter your name"/>
			<button onClick={handleJoinOpen} className="btn">Join Game</button>		
			<Createnewgame />	
			

			</div>
	</>
	
		
	)
}

export default HomePage
