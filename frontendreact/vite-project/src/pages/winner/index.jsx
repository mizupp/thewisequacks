import React , { useEffect } from "react"
import { useState } from "react"
import "./style.css"

import { useSelector, useDispatch } from "react-redux"
import { leaveRoom } from "../../actions"

import { useNavigate } from 'react-router-dom';
const Winner = () => {
	//get users and scores from redux
	// const data = useSelector((state) => state.gameState)
	// const [winner, setWinner] = useState("");
	// setWinner("Russell");
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const socket = useSelector((state) => state.socket)

	const winner = "Russell";
	const data = {
		users: [{
			userID: '123',
			name: "one",
			isHost: true,
			score: 100,
		},
		{
			userID: '456',
			name: "two",
			isHost: false,
			score: 10,
		},
		{
			userID: '789',
			name: "three",
			isHost: false,
			score: 500,
		}
	]
	}
	const [sortedUsers, setSortedUsers] = useState(() =>
		data.users.sort(function (a, b) {
			let x = a.score
			let y = b.score
			return x < y ? -1 : x > y ? 1 : 0
		})
	)

	const handleHome = () => {
		socket.emit('leave-session', (data.room))
		dispatch(leaveRoom())
		navigate('/')
	}

	return (
		<div className="winnerpage flex flex-col">

			<h1 className="winnerchickendinner">Winner is {winner} </h1>

			<div className="container podium">
        <div className="podiumbar">
          <p className="podiumuser">Miz</p>
          <div className="podiumrank second">2</div>
        </div>
        <div className="podiumbar">
          <p className="podiumuser">Russell</p>
          <div className="podiumrank first">1</div>
        </div>
        <div className="podiumbar">
          <p className="podiumuser">Tom</p>
          <div className="podiumrank third">3</div>
        </div>
      </div>
			<table>
				<thead>
					<tr>
						<td>Rank</td>
						<td colSpan={"2"}>Player</td>
						<td>Score</td>
					</tr>
				</thead>
				<tbody>
					{sortedUsers.map((user, index) => (
						<tr
							className={`${index % 2 === 1 ? "bg-white" : "bg-gray-200"}`}
							key={index}
						>
							<td>{index + 1}</td>
							<td>
								<img className="rounded-full h-10 w-10" src={user?.avatar} />
							</td>
							<td>{user.name}</td>
							<td>{user.score}</td>
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={handleHome}>Back to Home</button>
		</div>
	)
}

export default Winner
