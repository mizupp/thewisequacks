import React, { useState } from "react"

const PlayerListLobby = ({ users }) => {
	console.log(users)

	return (
		<div className="w-full h-full flex justify-center items-start m-0">
			<table className="table-fixed w-28 sm:w-52 md:w-96">
				<thead>
					<tr>
						<th colSpan="2">Player</th>
					</tr>
				</thead>
				{users && (
					<tbody>
						{users.map((user, index) => (
							<tr
								className={`${index % 2 === 1 ? "bg-white" : "bg-gray-200"}`}
								key={index}
							>
								<td>
									<img className="rounded-full h-10 w-10" src={user?.avatar} />
								</td>
								<td>{user.name}</td>
							</tr>
						))}
					</tbody>
				)}
			</table>
		</div>
	)
}

export default PlayerListLobby
