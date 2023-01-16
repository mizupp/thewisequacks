import React from "react"

import MyModal from "../../components/Modal"
import Instructions from "../../components/Instructions"
import HighScoreList from "../../components/HighScoresList"
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
	
	return (
	<>
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
		</div>
	</>
	
		
	)
}

export default HomePage
