import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import QuestionCard from "../QuestionCard"

const GameGallery = () => {
	const easy = useSelector(state => state.gameState.questions.easy)
	const medium = useSelector(state => state.gameState.questions.medium)
	const hard = useSelector(state => state.gameState.questions.hard)

	const handleForm = async (e) => {
		e.preventDefault();
		
	}

	return (
		<div className="p-2 grid grid-cols-1 grid-rows-3 ">
			<div className="grid grid-cols-6">
				{easy &&
					easy.map((q) => (
							<QuestionCard key={q.id} QuestionData={q} Winner={false} />
						))}
			</div>
			<div className="grid grid-cols-6">
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
