import React, {useState} from "react";
import PlayerCard from "../../components/PlayerCard";
import AvatarSelection from "../../components/AvatarSelection";
import WaitingRoom from "../../components/WaitingRoom";
import PlayerListLobby from "../../components/PlayerListLobby";
import { Navigate } from "react-router-dom"
import MyModal from "../../components/Modal";


import "./styles.css"
import { useSelector } from "react-redux"
import { useEffect } from "react"



const Lobby = () => {

	


	
	const [AvatarSelectionOpen, setAvatarSelectionOpen] = useState(true);
  const [host, setHost] = useState(true);
	const [WaitingRoomOpen, setWaitingRoomOpen] = useState(true);
	const data = useSelector(state => state.gameState);
	const icon = useSelector(state => state.icon);
	const user = useSelector(state => state.user);


	return (
		<div role="lobbyContainer" className="lobby-container">
			<div className="AvatarSelection">
				{user && <AvatarSelection user={user} room={data.room} />}
			</div>
			<div className="PlayerLobbyList">
				{data && <PlayerListLobby users={data.users} icon={icon} />}
			</div>
			<div className="WaitingRoom">
				<WaitingRoom data={data} />
			</div>
			{/* <PlayerCard className=""/> */}
		</div>
	)
}

export default Lobby
