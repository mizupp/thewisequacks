import axios from "axios"
import React, { useEffect, useState } from "react"
import QuestionCard from "../QuestionCard"

const GameGallery = () => {
	const [easy, setEasy] = useState(null)
	const [medium, setMedium] = useState(null)
	const [hard, setHard] = useState(null)

	useEffect(() => {
		const getAllQuestions = async () =>
			axios.all([
				axios.get(
					"https://the-trivia-api.com/api/questions?limit=20&difficulty=easy"
				),
				axios.get(
					"https://the-trivia-api.com/api/questions?limit=20&difficulty=medium"
				),
				axios.get(
					"https://the-trivia-api.com/api/questions?limit=20&difficulty=hard"
				),
			])



    // return (
    //     <div className="p-2 grid grid-cols-1 grid-rows-3 gap-2" >
    //         <div className="grid gap-2 grid-cols-6">{easy && easy.slice(-6).map((q) => <QuestionCard key={q.id} QuestionData={q} Winner={false} />)}</div>
    //         <div className="grid gap-2 grid-cols-6">{medium && medium.slice(-6).map((q) => <QuestionCard key={q.id}  QuestionData={q} Winner={false} />)}</div>
    //         <div className="grid gap-2 grid-cols-6">{hard && hard.slice(-6).map((q) => <QuestionCard key={q.id}  QuestionData={q} Winner={false} />)}</div>
    //     </div>
    // )

		getAllQuestions().then(
			axios.spread(({ data: easyRes }, { data: medRes }, { data: hardRes }) => {
				setEasy(easyRes)
				setMedium(medRes)
				setHard(hardRes)
			})
		)
	}, [])


	const handleForm = async (e) => {
		e.preventDefault();
		
	}

	

	return (
		<div className="p-2 grid grid-cols-1 grid-rows-3 ">
			<div className="grid grid-cols-6">
				{easy &&
					easy
						.slice(-6)
						.map((q) => (
							<QuestionCard key={q.id} QuestionData={q} Winner={false} />
						))}
			</div>
			<div className="grid grid-cols-6">
				{medium &&
					medium
						.slice(-6)
						.map((q) => (
							<QuestionCard key={q.id} QuestionData={q} Winner={false} />
						))}
			</div>
			<div className="grid grid-cols-6">
				{hard &&
					hard
						.slice(-6)
						.map((q) => (
							<QuestionCard key={q.id} QuestionData={q} Winner={false} />
						))}
			</div>
		</div>
	)

}

export default GameGallery
