import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import GameGallery from "../../components/GameGallery";
import ScoreBoard from "../../components/ScoreBoard";

const Game = () => {

    const data = useSelector(state => state.gameState);

    return (
        <>
            {/* <ScoreBoard users={data.users} /> */}
            <GameGallery />
        </>
    )

}

export default Game
