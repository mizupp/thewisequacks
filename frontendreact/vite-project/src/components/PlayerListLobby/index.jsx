import React from "react";

const PlayerListLobby = ({users}) => {

    return (
        <table className="table-fixed">
            <thead>
                <tr>
                    <th rowSpan="2">Player</th>
                </tr>
            </thead>
            <tbody>
                {/* {users.map((user, index) => ( */}
                    <tr key={index}>
                        <td>adam</td>
                        <td>adam</td>
                    </tr>
                {/* )) */}
                {/* } */}
            </tbody>
        </table>
    )

}

export default PlayerListLobby;