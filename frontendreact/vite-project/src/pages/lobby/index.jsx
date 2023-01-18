import React, {useState} from "react";
import PlayerCard from "../../components/PlayerCard";
import AvatarSelection from "../../components/AvatarSelection";
import WaitingRoom from "../../components/WaitingRoom";
import PlayerListLobby from "../../components/PlayerListLobby";

import MyModal from "../../components/Modal";

import "./styles.css"
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Lobby = () => {
	const [AvatarSelectionOpen, setAvatarSelectionOpen] = useState(true);
    const [host, setHost] = useState(true);
	const [WaitingRoomOpen, setWaitingRoomOpen] = useState(true);
	const data = useSelector(state => state.gameState);

	return (
		<div className="lobby-container">
			<div className="AvatarSelection">
				<AvatarSelection />
			</div>
			<div className="PlayerLobbyList">
				{data && <PlayerListLobby users={data.users} />}
			</div>
			<div className="WaitingRoom">
				<WaitingRoom data={data} />
			</div>
			{/* <PlayerCard className=""/> */}
		</div>
	)
}

export default Lobby
