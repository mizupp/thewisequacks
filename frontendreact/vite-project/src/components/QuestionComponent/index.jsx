import React, {useState, useRef, useEffect} from 'react'

const QComp = ({data, onClose}) => {
    const correct = data.correctAnswer + " CORRECT";
    const answers = [...data.incorrectAnswers, correct];
    const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
    const [timeLeft, setTimeLeft] = useState(5);

    useEffect(() => {    
        // exit early when we reach 0
        if (!timeLeft) return;
    
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
    
          setTimeLeft(timeLeft - 1);
        }, 1000);
    
        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
      }, [timeLeft]);

    return (
        <>
            <h2>{data.question}</h2>
            {timeLeft === 0 ? null : <h1>{timeLeft}</h1>}
            {!timeLeft && shuffledAnswers.map((a, i) => <p key={i}>{a}</p>)}
            <button onClick={onClose}>Close</button>
        </>
    )
}

export default QComp

