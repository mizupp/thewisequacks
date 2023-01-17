import React, {useState} from "react";

const PlayerListLobby = ({users}) => {
    const [userList, setUserList] = useState(null);
    // console.log(users)

    return (
        <div className="w-full h-full">
            <table className="table-fixed border-separate border-spacing-x-4">
                <thead>
                    <tr>
                        <th rowSpan="2">Player</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                         <tr className={`${index%2===0 ? 'bg-white' : 'bg-gray-200'}`} key={index}>
                            <td><img className="rounded-full h-4/5 w-4/5" src={user.avatar}/></td>
                            <td>{user.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default PlayerListLobby;