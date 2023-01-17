import React, { createContext, useEffect, useState } from 'react';

import {useDispatch, useSelector} from "react-redux"
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './components/layout'
import ChatLayout from './components/ChatLayout'
import Chat from './components/Chat';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { HomePage, Game, Winner, Lobby } from './pages'



import {io} from "socket.io-client";
import { changeState, updateScore, storeSocket } from './actions'

const ENDPOINT = "http://localhost:3000";

const socketend = io(ENDPOINT);
export const SocketContext = createContext(socketend)

function App() {

  const [socket, setSocket] = useState();
  const dispatch = useDispatch();
  const clientUser = useSelector((state) => state.user);
  const host = useSelector((state) =>  state.gameState.host);
  const gameState = useSelector((state) => state.gameState);

  
  useEffect(() => {
    const newSocket = io(ENDPOINT);
    newSocket.on("change state", (state) => {
      dispatch(changeState(state));
    });
    newSocket.on("update opponents score", ({ user, score }) => {
      dispatch(updateScore(user, score));
    });
    newSocket.on("update opponent completion", (user) => {
      dispatch(setQuizAsComplete(user));
    });
    dispatch(storeSocket(newSocket));
    setSocket(newSocket);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("user joining waiting room", (user) => {
        if (clientUser === host) {
          dispatch(addUser(user));
          let newGameState = { ...gameState };
          newGameState.users.push({
            name: user,
            score: 0,
            hasCompletedQuiz: false,
          });
          socket.emit("send state to players", newGameState);
        }
      });
    }
  }, [socket, clientUser, host]);


  return (
    <div className='h-screen flex flex-col justify-between'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<ChatLayout />}>
            <Route path="game" element={<Game />} />
            <Route path="lobby" element={<Lobby />} />
            <Route path="winner" element={<Winner />} />
          </Route>
        </Route>
      </Routes>    
    </div>
  )
}

export default App
