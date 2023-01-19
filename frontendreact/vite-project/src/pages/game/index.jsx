import React, {useState} from "react";
import { Navigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Timerbar from "../../components/Timerbar";
import GameGallery from "../../components/GameGallery";
import ScoreBoard from "../../components/ScoreBoard";

const Game = () => {

    const data = useSelector(state => state.gameState);
    const constant = 30
    return (
        <>
        
            {/* <Timerbar /> */}

            <Timerbar constant={constant} />
            <ScoreBoard users={data.users} />
            <GameGallery/>
            {data.hasGameEnded && <Navigate to="/winner" />}
        </>
    )

}

export default Game
