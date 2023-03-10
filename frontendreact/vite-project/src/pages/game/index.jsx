import React, {useState} from "react";
import { Navigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Timerbar from "../../components/Timerbar";
import GameGallery from "../../components/GameGallery";
import ScoreBoard from "../../components/ScoreBoard";

const Game = () => {

    const data = useSelector(state => state.gameState);
 
    return (
        <>
        
           

            <Timerbar  />
            <ScoreBoard users={data.users} />
            <GameGallery/>
            {data.hasGameEnded && <Navigate to="/winner" />}
        </>
    )

}

export default Game
