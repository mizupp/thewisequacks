import React, { useState } from "react"
import { useSelector } from "react-redux"

import MyModal from "../../components/Modal"

import Instructions from "../../components/Instructions"
import HighScoreList from "../../components/HighScoresList"
import Timerbar from "../../components/Timerbar"
import StartGame from "../../components/startGame"
import Whiplash from '../../components/Music/Sound/whiplash.mp3'
// import JoinGame from "../../components/startGame"

import { Link } from "react-router-dom"
import "./style.css";

const HomePage = () => {
	const audio = new Audio(Whiplash)
	audio.volume = 0.1

	const [instructionsOpen, setInstructionsOpen] = React.useState(false)
	const [highScoreListOpen, setHighScoreListOpen] = React.useState(false)

	const openInstructionsModal = () => {
		setInstructionsOpen(true)
		audio.play()
	}

	const openHighScoreListModal = () => {
		setHighScoreListOpen(true)
		audio.play()
	}

	const socket = useSelector((state) => state.socket)
	const [username, setUsername] = useState("")

	const handleJoinOpen = () => {
		// socket.emit('join game', ({username, room}));
		socket.emit("join game", user)
		console.log("disconnected")
	}

	const handleWinnerSound = () => {

	}


	return (
	<>
	<p className="headingmain flex flex-col justify-between">EARLY BIRD</p>
	{/* <JoinGame /> */}
	<StartGame />
		<div>
			<button 
			type="button" className="instruction"
			onClick={openInstructionsModal}>
			Instructions
			</button>
			<button type="button" className="instruction"
			onClick={openHighScoreListModal}>
			High Score
			</button>
			<MyModal onClose={() => setInstructionsOpen(false)} Component={<Instructions/>} setOpen={instructionsOpen} />
			<MyModal onClose={() => setHighScoreListOpen(false)} Component={<HighScoreList/>} setOpen={highScoreListOpen} />
			</div>
		</>
	)
}

export default HomePage
