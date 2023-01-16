
import React from "react"

import MyModal from "../../components/ModalButton"
import Instructions from "../../components/Instructions"
import HighScoreList from "../../components/HighScoresList"
import { Link } from "react-router-dom"

const HomePage = () => {
	return (
	<>
		<h1 className="text-4xl">Home Page</h1>
		<div>
			<MyModal Component={<Instructions/>} ButtonText="Instructions"/>
			<MyModal Component={<HighScoreList/>} ButtonText="High Scores"/>
		</div>
	</>
	
		
	)
}

export default HomePage