import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const URL = "http://localhost:3000/highscores";

const HighScoreList = () => {
     const [scores, setScores] = useState(null);
     
     async function getScores() {
        const {data} = await axios.get(URL);
        console.log(data);
        setScores(data);
    }

    useEffect(() => {
        getScores(); 
    }, [])  

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
