import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { startGame } from '../../actions';
import './style.css';

const WaitingRoom = () => {
    const data = useSelector(state => state.gameState);
    const user = useSelector(state => state.user);
    const socket = useSelector(state => state.socket);
    const dispatch = useDispatch()
    console.log(data);


    function handleButtonClick(){
        dispatch(startGame());
        let newState = {
            ...data,
            isGameStarted: true
        }
        
        socket.emit('send state to players', newState )
        console.log(data);
    }

    return (
        <>
        <div>
            <div className="waiting-message">
                <h1>This is {data.host}'s room </h1>
                <h2>Please wait for other players...</h2>
            </div>
            <p>Share room name to friends:</p>
            <div>
                <span>{data.roomName}</span>
            </div>
            <button onClick={handleButtonClick} className="btn start-game">START GAME</button>
            {data.isGameStarted && <Navigate to='/game' />}
        </div>
        </>

    );
}

export default WaitingRoom;