import React from "react"

import MyModal from "../../components/ModalButton"
import Instructions from "../../components/Instructions"
import HighScoreList from "../../components/HighScoresList"

const HomePage = () => {
	return (
	<>
		<h1>Home Page</h1>
		<MyModal Component={<Instructions/>} ButtonText="Instructions"/>
		<MyModal Component={<HighScoreList/>} ButtonText="High Scores"/>
	</>
	
		
	)
}

export default HomePage
