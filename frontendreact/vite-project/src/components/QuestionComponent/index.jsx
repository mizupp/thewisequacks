import React from 'react'

const QComp = ({data, onClose}) => {
    return (
        <>
            <h2>{data.question}</h2>
            {data.incorrectAnswers.map(a => <p>{a}</p>)}
            <p>{data.correctAnswer}</p>
            <button onClick={onClose}>Close</button>
        </>
    )
}

export default QComp
