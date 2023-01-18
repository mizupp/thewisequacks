import React, {useState} from "react";
import PlayerCard from "../../components/PlayerCard";
import AvatarSelection from "../../components/AvatarSelection";
import WaitingRoom from "../../components/WaitingRoom";
import PlayerListLobby from "../../components/PlayerListLobby";

import MyModal from "../../components/Modal";

import "./styles.css"

const Lobby = () => {
	const [AvatarSelectionOpen, setAvatarSelectionOpen] = useState(true);
    const [host, setHost] = useState(true);
	const [WaitingRoomOpen, setWaitingRoomOpen] = useState(true);
	const users = [
		{
			name: "John",
			avatar: "https://i.imgur.com/8Km9tLL.png",
			ready: true,
			host: true,
		},
		{
			name: "Jane",
			avatar: "https://i.imgur.com/8Km9tLL.png",
			ready: false,
			host: false,
		},
		{
			name: "Joe",
			avatar: "https://i.imgur.com/8Km9tLL.png",
			ready: false,
			host: false,
		},
		{
			name: "Jill",
			avatar: "https://i.imgur.com/8Km9tLL.png",
			ready: false,
			host: false,
		}
	]

	return (
		<div className="lobby-container">
			<div className="AvatarSelection">
				<AvatarSelection />
			</div>
			<div className="PlayerLobbyList">
				<PlayerListLobby users={users} />
			</div>
			<div className="WaitingRoom">
				{/* <WaitingRoom /> */}
			</div>
			{/* <PlayerCard className=""/> */}
		</div>
	)
}

export default Lobby
