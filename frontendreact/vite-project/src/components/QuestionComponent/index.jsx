import React, { useState, useEffect, useMemo, useReducer } from "react"
import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateScore, updateLocalUser, leaveRoom } from "../../actions"
import Victory from '../Music/Sound/cardshuffle.mp3'


const QComp = ({ data, onClose }) => {
	const user = useSelector(state => state.user);
	const room = useSelector(state => state.gameState.room)
	const socket = useSelector(state => state.socket)
	const [isClicked, setClicked] = useState()
	const [score, setScore] = useState(0)
	const difficulty = data.difficulty
	const shuffledAnswers = data.answers
	const dispatch = useDispatch()

	

	const [timeLeft, setTimeLeft] = useState(18)

	const [enabled, setEnabled] = useState(true)
	const [beginTimestamp, setBeginTimestamp] = useState(0)

	const handleAnswerSound = () => {
		const answeringsound = new Audio(Victory)
		answeringsound.volume = 1
		answeringsound.play()
	}

	const handleClick = (ansObj) => {
		console.log(ansObj)
		let timeDiff = ansObj.answerTime - beginTimestamp
		console.log(ansObj.answerTime)
		console.log(beginTimestamp)
		setScore(calculatescore(timeDiff, ansObj.answer, difficulty));
		// SEND SCORE TO USER!!!!
		console.log("userscore", score)
		setEnabled(false);
		setTimeLeft(2);
		handleAnswerSound()
	}

	const handleScore = () => {
		const playerInfo = user
		playerInfo.score += score
		console.log(playerInfo)
		dispatch(updateLocalUser(playerInfo))
		setScore(0)
		socket.emit('update player' , {playerInfo, room})
	}
	

	useEffect(() => {
		if (timeLeft < 4) {
			handleScore()
		}
		if (timeLeft === 18){
			setBeginTimestamp(new Date())
		}
		if (!timeLeft) {
			onClose()
			return
		}
		const intervalId = setInterval(() => {
			setTimeLeft(timeLeft - 1)
		}, 1000)
		return () => {
			clearInterval(intervalId)
		}
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

const multiplier = (difficulty) => {
	switch (difficulty) {
		case 'easy':
			return 1
		case 'medium':
			return 2
		case 'hard':
			return 3
		default:
			break;
	}
}

const calculatescore = (time, answer, difficulty) =>{
	console.log(time-5000)
	let scorenum = 0;
	if (answer.isCorrect) {
		return (Math.ceil((10000 - (time - 3000))/1000)*10)*multiplier(difficulty);
	} else {
		return scorenum = 0;
	}
}

// const calculateifclicked = (handleClick, calculatescore) => {
// 	if (handleClick!=null )
// }

const AnswerComp = ({ answer, enabled, isEndTimer, onClick }) => {
	const [isAnswered, setIsAnswered] = useState(false)
	//function to handle onlclick -- need backend squad
	const { isCorrect } = answer

	const clickHandler = () => {
		setIsAnswered(true)
		onClick({ answerTime: new Date(), answer: answer })
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
