import React, {useState} from "react"
import { useSelector } from "react-redux"

const Winner = () => {
	//get users and scores from redux
	 const data = useSelector((state) => state.gameState)

	const [sortedUsers, setSortedUsers] = useState(() =>
		data.users.sort(function (a, b) {
			let x = a.score
			let y = b.score
			return x < y ? 1 : x > y ? -1 : 0
		})
	)

	return (
		<div>
			<div className="winner">
				<h1>Winner</h1>
				<img src={sortedUsers[0].icon} width='200px'alt="winner" />
				<h1>{sortedUsers[0].name} </h1>
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
								<img className="rounded-full h-10 w-10" src={user?.icon} />
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
