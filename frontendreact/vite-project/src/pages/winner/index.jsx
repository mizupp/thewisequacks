import React from "react"
import { useState } from "react"

const Winner = () => {
	//get users and scores from redux
	// const data = useSelector((state) => state.gameState)
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
		}]
	}
	const [sortedUsers, setSortedUsers] = useState(() =>
		data.users.sort(function (a, b) {
			let x = a.score
			let y = b.score
			return x < y ? -1 : x > y ? 1 : 0
		})
	)

	return (
		<div>
			<h1>Winner is Person </h1>
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
		</div>
	)
}

export default Winner
