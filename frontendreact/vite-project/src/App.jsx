import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './components/layout'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { HomePage, Game, Winner } from './pages'

import {io} from "socket.io-client";
import { changeState, updateScore, storeSocket } from './actions'

const ENDPOINT = "http://localhost:3000";


function App() {

  const [socket, setSocket] = useState();
  const dispatch = useDispatch();
  const clientUser = useSelector((state) => state.user);
  const host = useSelector((state) =>  state.gameState.host);
  const gameState = useSelector((state) => state.gameState);

  useEffect(()=>{
    const newSocket = io(ENDPOINT);
    dispatch(storeSocket(newSocket))

    // newSocket.on("change state", (state) => {
    //   dispatch(changeState(state))
    // })
    // newSocket.on("update score", ({user, score}) => {
    //   dispatch(updateScore(user, score))
    // })

  }, [])


  return (
    <div className='h-screen flex flex-col justify-between'>
    <Routes>
      <Route exact path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="game" element={<Game />} />
        <Route path="winner" element={<Winner />} />
      </Route>
    </Routes>
    </div>
  )
}

export default App
