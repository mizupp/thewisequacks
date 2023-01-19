import React, {useState} from "react";
import { Navigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import GameGallery from "../../components/GameGallery";
import ScoreBoard from "../../components/ScoreBoard";

const Game = () => {

    const data = useSelector(state => state.gameState);

    return (
        <>
            {/* <ScoreBoard users={data.users} /> */}
            {data.hasGameEnded && <Navigate to="/winner" />}
        </>
    )

}

export default Game
