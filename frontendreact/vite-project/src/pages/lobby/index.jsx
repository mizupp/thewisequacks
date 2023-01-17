import React, {useState} from "react";
import PlayerCard from "../../components/PlayerCard";
import AvatarSelection from "../../components/AvatarSelection";
import WaitingRoom from "../../components/WaitingRoom";
import PlayerListLobby from "../../components/PlayerListLobby";

import MyModal from "../../components/Modal";

const Lobby = () => {
	const [AvatarSelectionOpen, setAvatarSelectionOpen] = useState(true);
    const [host, setHost] = useState(true);
	const [WaitingRoomOpen, setWaitingRoomOpen] = useState(true);


	return (
		<div className="lobby-container">
			{/* <WaitingRoom/> */}
			<h1>Lobby</h1>
			<PlayerListLobby/>
			{/* <PlayerCard className=""/> */}
			{/* <AvatarSelection /> */}
		</div>
	)
}

export default Lobby
