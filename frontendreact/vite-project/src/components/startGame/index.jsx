import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { storeSocket, changeState, storeUser, addUser, updateScore, setCompleted } from "../../actions";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"; 

const StartGame = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const socket = useSelector((state) => state.socket);
    const [username, setName] = useState("");
    const [room, setRoom] = useState("")

    const data = useSelector(state => state.gameState);

    const handleCreate = () => {
        const playerInfo = {
            userID: socket.id,
            name: username,
            isHost: true,
            score: 0
        }
        console.log(playerInfo)
        socket.emit('create game', playerInfo);
        dispatch(addUser(playerInfo))
        navigate('/lobby')
    }

    const handleJoin = () => {
        const playerInfo = {
            userID: socket.id,
            name: username,
            isHost: false,
            score: 0
        }
        socket.emit('join game', {room, playerInfo})
       dispatch(addUser(playerInfo))
       navigate('/lobby')
    }

    return(
        <div className="start-game">
            <input type="text" name="username" value={username} placeholder="name" onChange={(e) => setName(e.target.value)}/>
            <input type="text" name="room" value={room} placeholder="room code" onChange={(e) => setRoom(e.target.value)}/>
            <br />
            <button onClick={handleJoin}>Join game</button>
                        
            <Link onClick={handleCreate} to="/lobby" className="btn btn-primary">Create game</Link>
        </div>
    )
}

export default StartGame;