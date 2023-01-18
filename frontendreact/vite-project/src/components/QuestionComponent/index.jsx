import React, { useState, useEffect, useMemo } from "react"
import { useCallback } from "react"

const QComp = ({ data, onClose }) => {
	const correct = { text: data.correctAnswer, isCorrect: true }
	const incorrect = data.incorrectAnswers.map((a) => ({
		text: a,
		isCorrect: false,
	}))
	const answers = [...incorrect, correct]
	// const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
	const shuffledAnswers = useMemo(
		() => answers.sort(() => Math.random() - 0.5),
		[data]
	)

	const [timeLeft, setTimeLeft] = useState(20)
	const [enabled, setEnabled] = useState(true)
	const [beginTimestamp, setBeginTimestamp] = useState(0)

	//dispatch(//beginTimestamp)

	const handleClick = (ansObj) => {
		console.log(ansObj)
		// setEndTimestamp(ansObj.answerTime)
		let timeDiff = endTimestamp - beginTimestamp
		dispatch()
		//user
		//timeDiff
		//ansObj
		setEnabled(false)
	}

	useEffect(() => {
		setBeginTimestamp(new Date().getTime())
		if (!timeLeft) {
			onClose()
			return
		}
		const intervalId = setInterval(() => {
			setTimeLeft(timeLeft - 1)
		}, 1000)
		return () => clearInterval(intervalId)
	}, [timeLeft])

	return (
		<>
			{timeLeft <= 15 && timeLeft >= 5 ? (
				<h1 className="text-5xl font-bold text-gray-800 absolute top-5 left-10">
					{timeLeft - 5}
				</h1>
			) : null}
			<h2 className="text-xl">{data.question}</h2>
			{timeLeft <= 15 ? null : (
				<h1 className="text-[10rem] font-bold text-gray-800">
					{timeLeft - 15}
				</h1>
			)}
			<div className="flex flex-col">
				{timeLeft <= 15 &&
					shuffledAnswers.map((a, i) => (
						<AnswerComp
							onClick={handleClick}
							isEndTimer={timeLeft <= 5}
							enabled={enabled}
							answer={a}
							key={i}
						></AnswerComp>
					))}
			</div>
			{/* <button onClick={onClose}>Close</button> */}
		</>
	)
}

export default QComp

const AnswerComp = ({ answer, enabled, isEndTimer, onClick }) => {
	const [isAnswered, setIsAnswered] = useState(false)
	//function to handle onlclick -- need backend squad
	const { isCorrect } = answer

	const clickHandler = () => {
		setIsAnswered(true)
		onClick({ answerTime: new Date().getTime(), answer: answer })
	}

	return (
		<button
			className={`border-indigo-600 opacity-100 rounded-sm border p-2 ${
				isEndTimer && (isCorrect ? "bg-green-600" : "bg-red-600")
			} 
        ${!enabled && (!enabled && isAnswered ? "opacity-100" : "opacity-50")}`}
			disabled={!enabled}
			onClick={clickHandler}
		>
			{answer.text}
		</button>
	)
}
