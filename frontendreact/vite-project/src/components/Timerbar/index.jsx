import React, { useState, useEffect } from 'react'
import './style.css'

export default function Timerbar() {
  const [time, setTime] = useState(30);
  const [timeGuess, setTimeGuess] = useState();

  
  useEffect(()=>{
    let qT = setInterval(function(){
      setTime(prev => prev-1);
      if(time === 0){
        console.log("Game over")
      }
    }, 1000)
    return () => clearInterval(qT)
  },[])


  return (
    <>
      <div className="round-time-bar">
        <div className='timerCounter'>
      <div className='TL'>
          <progress id="countdown" value={timeGuess} max="5"></progress>
          <h2>Time left: {time}</h2>

        </div>
        </div>

      </div>

    </>
  )
}
