// import ProgressTimer from 'react-progress-bar-timer';
// //https://socket.dev/npm/package/react-progress-bar-timer#demo

// const Timerbar = () => {
// const ExampleComponent = () => (
// //   <ProgressTimer started label="Something" duration={3} onFinish={finished()} />
// <ProgressTimer label="Something" duration={3} onFinish={finished} />

// );

// const finished = () => {
//     console.log("done");
// }
  

// return (
//     <>

    
//     <br />
//     <p> Here is the progress bar </p>
//     <ExampleComponent />
//     </>
// );
// }

// export default Timerbar;

import React, { useState, useEffect } from 'react'
import './style.css'

export default function Timerbar() {
  const [time, setTime] = useState();
  const [timeGuess, setTimeGuess] = useState();

var TL = 8;
  useEffect(()=>{
    setTime(8)
    let qT = setInterval(function(){
      setTime(prev => prev-1);
      TL -= 1
      // console.log(TL)
      if(TL=== 0){
        setTime(8)
        TL = 8
        console.log("Alright next question")
      }
    }, 1000)
    return () => clearInterval(qT)
  },[])

var timeToGuess = 6
  useEffect(()=>{
    setTimeGuess(6)
    let guessTimer = setInterval(function(){
      timeToGuess -= 1
      setTimeGuess(prev => prev-1)
      if(timeToGuess===-2){
        setTimeGuess(6)
        timeToGuess = 6
      }
    }, 1000)
    return () => clearInterval(guessTimer)
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
