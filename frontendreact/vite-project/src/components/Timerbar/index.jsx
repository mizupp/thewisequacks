import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import './style.css'

export default function Timerbar() {
  const time = useRef(5);
  const endGame = useRef(1);
  const [timeTime, setTimeTime] = useState(30)
  const room = useSelector(state => state.gameState.room)
  const socket = useSelector(state => state.socket)
  const isHost = useSelector(state => state.isHost)
  const hasGameEnded = useSelector(state => state.gameState.hasGameEnded)

//   useEffect(()=>{
//     if (hasGameEnded) {
//       socket.emit('end game', (room));
//     }
// }, [])

  useEffect(()=>{
    let qT = setInterval( function(){
      if(time.current <= 0 ){
        if (isHost && endGame.current === 1) {
          endGame.current = 0;
          socket.emit('end game', (room));
        }
      }
      else if (time.current > 0){
        time.current -= 1;
        setTimeTime(time.current)
      }
      else{
        return
      }
    }, 1000)
  }, [])



  return (
    <>
      <div className="round-time-bar">
        <div className='timerCounter'>
      <div className='TL'>
          <progress id="countdown" value={timeTime} max="30"></progress>
          {time.current > 0 && <h2>Time left: {timeTime}</h2>}
          {time.current <= 0 && <h2>Game over!</h2> }
          {/* {time <= 0 && isHost ? socket.emit('end game', (room)) : null} */}
        </div>
        </div>

      </div>

    </>
  )
}
