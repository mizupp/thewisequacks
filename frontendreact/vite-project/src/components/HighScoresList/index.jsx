import React from 'react';

const URL = "";

const HighScoreList = () => {
    // const data = await axios.get(URL);
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
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default HighScoreList;
