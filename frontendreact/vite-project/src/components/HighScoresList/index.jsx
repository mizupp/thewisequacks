import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const URL = "http//:localhost:3000/highscores";

const HighScoreList = () => {
     const [scores, setScores] = useState(null);
     
    useEffect(() => {async () => {const data = await axios.get(URL);
        setScores(data);}
    }, [])

    const data = [
        {
            id: 1,
            name: "John",
            score: 100
        },
        {
            id: 2,
            name: "Jane",
            score: 200
        }
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {scores && scores.map((item) => (
                    <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default HighScoreList;
