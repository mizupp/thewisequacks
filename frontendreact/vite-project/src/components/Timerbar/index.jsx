import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import './style.css'

export default function Timerbar() {
  const time = useRef(30);
  const room = useSelector(state => state.gameState.room)
  const socket = useSelector(state => state.socket)
  const isHost = useSelector(state => state.isHost)
  const hasGameEnded = useSelector(state => state.gameState.hasGameEnded)

  useEffect(()=>{
    let qT = setInterval(function(){
      
      if(time.current <= 0 ){
        // hasGameEnded = true;
        socket.emit('end game', (room));
        // if (isHost) {
          
        // }
      }
      else if (time.current > 0){
        time.current -= 1;
        console.log(time.current)
      }
      else{
        return
      }
    }, 1000)
  },time.current)

  return (
    <>
      <div className="round-time-bar">
        <div className='timerCounter'>
      <div className='TL'>
          <progress id="countdown" value={time} max="30"></progress>
          {time > 0 && <h2>Time left: {time}</h2>}
          {time <= 0 && <h2>Game over!</h2> }
          {/* {time <= 0 && isHost ? socket.emit('end game', (room)) : null} */}
        </div>
        </div>

      </div>

    </>
  )
}
