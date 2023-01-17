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
        <svg viewBox="0 0 1080 1080" style={{isolation: 'isolate'}} preserveAspectRatio="xMidYMax meet">
        <path id="wormstraight" fill="none" strokeWidth={79} stroke="rgb(253,181,141)" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={3}>
          <animate attributeName="d" dur="2000ms" repeatCount="indefinite" values="M 280.57 776 Q 355 776 403 776 C 451 776 451 776 540 776 C 629 776 629 776 677.5 776 Q 726 776 799 776;

                     M 400.57 776 Q 415 776 463 776 C 511 776 451 656 540 656 C 629 656 569 776 617.5 776 Q 666 776 679 776;
                     
                     M 280.57 776 Q 355 776 403 776 C 451 776 451 776 540 776 C 629 776 629 776 677.5 776 Q 726 776 799 776;" />
        </path>
        {/* <g id="facestraight" transform="translate(-120 0)">
          <circle cx={787} cy={764} r={5} fill="rgb(71,71,76)" />
          <circle cx={807} cy={764} r={5} fill="rgb(71,71,76)" />
          <path d=" M 787 780 Q 792.001 784 797 784 Q 801.999 784 807 780" fill="none" strokeWidth={7} stroke="rgb(231,231,231)" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={3} />
          <animateTransform attributeName="transform" attributeType="XML" dur="2s" keyTimes="0;0.5;1" repeatCount="indefinite" type="translate" values="0;-120;0" calcMode="linear" />
        </g> */}
      </svg>
      <div className='TL'>
          <progress id="countdown" value={timeGuess} max="5"></progress>
          <h2>Time left: {time}</h2>

        </div>
        </div>

      </div>

    </>
  )
}
