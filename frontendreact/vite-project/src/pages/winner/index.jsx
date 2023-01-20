import React, {useState, useEffect} from "react"
import "./style.css"
import { useSelector, useDispatch } from "react-redux"
import { leaveRoom, updateLocalUser } from "../../actions"
import { useNavigate } from 'react-router-dom';
import WinnerSong from "../../components/Music/winnersong";
import axios from "axios";

const Winner = () => {
	const user = useSelector(state => state.user);
	const room = useSelector(state => state.gameState.room)
	const socket = useSelector(state => state.socket)
	const isHost = useSelector(state => state.isHost)

	const data = useSelector(state => state.gameState)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [allScores, setAllScores] = useState([]);
	
	const handleScores = async () => {
		try {
		  const url = "https://thewisequacks.onrender.com/highscores";
		  const payload = {
			name: sortedUsers[0].name,
			score: sortedUsers[0].score,
		  };
		  const headers = {
			"Content-Type": "application/json",
		  };
		  const { data } = await axios.post(url, payload, { headers });
		  console.log(data);
		} catch (error) {
		  console.log(error);
		}
	  };


	  useEffect(() => {
		if(isHost){
			handleScores()
		}
		console.log("top")
	  }, [])

	const handleWinnerSound = () => {
		<Winner />
		
	}

	const handleHome = () => {
		socket.emit('leave-session', (data.room))
		dispatch(leaveRoom())
		navigate('/')
	}
	
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
			<WinnerSong />
				<h1>{sortedUsers[0].name} </h1>
			</div>
			
		{console.log(sortedUsers)}
		<div className="wrapwinner">

			<div className="winnerpage flex flex-col">
				<h1 className="winnerchickendinner">{sortedUsers[0]?.name} Wins!</h1>
				<div className="outside flex flex-col justify-between">
				<div className="container2 podium">
        			<div className="podiumbar">
					<img className="winnerimage" src={sortedUsers[1]?.icon} width='200px'alt="winner" />
					<p className="podiumuser">{sortedUsers[1]?.name}</p>
          				<div className="podiumrank second">2</div>
        			</div>
        			<div className="podiumbar">
					<img className="winnerimage" src={sortedUsers[0]?.icon} width='200px'alt="winner" />
					<p className="podiumuser">{sortedUsers[0]?.name}</p>
          				<div className="podiumrank first">1</div>

        			</div>
        			<div className="podiumbar">
					<img className="winnerimage" src={sortedUsers[2]?.icon} width='200px'alt="winner" />
					<p className="podiumuser">{sortedUsers[2]?.name}</p>
          				<div className="podiumrank third">3</div>
        			</div>
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
							className={`${index % 2 === 1 ? "bg-red" : "bg-white"}`}
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
			<button className="backHome" onClick={handleHome}>Back to Home</button>
		</div>
		</div>
		</div>
	)
}

export default Winner
