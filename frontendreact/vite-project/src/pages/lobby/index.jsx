import React, {useState} from "react";
import PlayerCard from "../../components/PlayerCard";
import AvatarSelection from "../../components/AvatarSelection";
import MyModal from "../../components/Modal";

const Lobby = () => {
	const [AvatarSelectionOpen, setAvatarSelectionOpen] = useState(true);
    const [host, setHost] = useState(true);

	return (
		<div>
			<h1>Lobby</h1>
			<PlayerCard />
			<MyModal host={host} dismissable={false} onClose={() => setAvatarSelectionOpen(false)} Component={<AvatarSelection />} setOpen={AvatarSelectionOpen} />

		</div>
	)
}

export default Lobby
