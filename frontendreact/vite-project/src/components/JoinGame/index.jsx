import { useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { storeUser } from "../../actions";

const JoinGame = () => {
    const [username, setUsername] = useState("");
    const [quizCode, setQuizCode] = useState("");
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const dispatch = useDispatch();
    const socket = useSelector((state) => state.socket);

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleQuizCode = (e) => {
        setQuizCode(e.target.value);
    };  

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(storeUser(username));
        socket.emit("join game", {
          username,
          room: quizCode,
        });
        setUsername("");
        setQuizCode("");
        setIsFormSubmitted(true);
      };
      return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" label="Username" onChange={handleUsername} value={username} />
           
            <input type="text" label="Gamecode"
            onChange={handleQuizCode} value={quizCode}/> 
          <button type="submit">Join Game</button>
          {isFormSubmitted && <Navigate to="waiting-room" />}
        </form>
      );
}


export default JoinGame;