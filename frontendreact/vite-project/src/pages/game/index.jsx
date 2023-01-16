import React, {useState} from "react";
import AvatarSelection from "../../components/AvatarSelection";
import MyModal from "../../components/Modal";
import GameGallery from "../../components/GameGallery";

const Game = () => {

    const [AvatarSelectionOpen, setAvatarSelectionOpen] = useState(true);
    const [host, setHost] = useState(true);

    return (
        <>
            <h1>Game</h1>
            <GameGallery />
            <MyModal host={host} dismissable={false} onClose={() => setAvatarSelectionOpen(false)} Component={<AvatarSelection />} setOpen={AvatarSelectionOpen} />
        </>
    )

}

export default Game
