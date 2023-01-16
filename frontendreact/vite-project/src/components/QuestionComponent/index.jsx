import React from 'react'

const QComp = ({data, onClose}) => {
    const correct = data.correctAnswer + " CORRECT";
    const answers = [...data.incorrectAnswers, correct];
    const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

    return (
        <>
            <h2>{data.question}</h2>
            {shuffledAnswers.map(a => <p>{a}</p>)}
            <button onClick={onClose}>Close</button>
        </>
    )
}

export default QComp
