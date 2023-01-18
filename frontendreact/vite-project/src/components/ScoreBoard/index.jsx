import React, {useState} from 'react';
// const playerInfo = {
//     userID: socket.id,
//     name: username,
//     isHost: true,
//     score: 0,
// }

const ScoreBoard = ({users}) => {
    
    const [Users, setUsers] = useState(users);

    useEffect(() => {
        const sortedUsers = users.sort(function(a, b)
        {
            let x = a[score]; let y = b[score];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
        setUsers(sortedUsers);
    }, [users]);


    return (
        <div className="w-full h-32 flex flex-start gap-x-2 px-4">
            {Users.map((user, index) => (
                <div key={index} className="h-5/6 w-auto flex justify-center items-center">
                    <img src={user.img} alt={user.name} className="h-full w-full rounded-full" />
                </div>
            ))}
        </div>
    )
}

export default ScoreBoard;
