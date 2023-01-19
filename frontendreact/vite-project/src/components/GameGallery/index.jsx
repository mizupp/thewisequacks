import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import QuestionCard from "../QuestionCard"
// import { updateLocalUser } from "../../actions"
import PickCard from '../Music/Sound/pickcard.mp3'
import CardShuffle from '../Music/Sound/cardshuffle.mp3'

const GameGallery = ( {data}) => {

	const easy = useSelector(state => state.gameState.questions.easy)
	const medium = useSelector(state => state.gameState.questions.medium)
	const hard = useSelector(state => state.gameState.questions.hard)

	
	// const [firstsound, secondsound] = useState(new Audio(PickCard))
	const handleForm = async (e) => {
		e.preventDefault();
		const answeringsound = new Audio(PickCard)
		answeringsound.volume = 1
		answeringsound.play()
	}



	return (
		<div onClick={handleForm} className="p-2 grid grid-cols-1 grid-rows-3">
			<div className="grid grid-cols-6">
				{easy &&
					easy.map((q) => (
							<QuestionCard key={q.id} QuestionData={q} Winner={false} />
						))}
			</div>
			<div className="grid grid-cols-6 ">
				{medium &&
					medium.map((q) => (
							<QuestionCard key={q.id} QuestionData={q} Winner={false} />
						))}
			</div>

			<div className="grid grid-cols-6">
				{hard &&
					hard.map((q) => (
							<QuestionCard key={q.id} QuestionData={q} Winner={false} />
						))}
			</div>
		</div>
	)
}

export default GameGallery
