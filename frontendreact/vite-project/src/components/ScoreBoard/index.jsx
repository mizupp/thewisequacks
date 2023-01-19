import React, {useState, useEffect} from 'react';

const ScoreBoard = ({users}) => {
    
    const [Users, setUsers] = useState(users);

    useEffect(() => {
        const sortedUsers = users.sort(function(a, b)
        {
            let x = a["score"]; let y = b["score"];
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        });
        setUsers(sortedUsers);
    }, [users]);

    const position = (index) => {
        switch (index+1) {
            case 1:
                return 'st'
            case 2:
                return 'nd'
            case 3:
                return 'rd'
            default:
                return 'th'
        }
    }

    return (
        <div className="w-full h-32 flex flex-start gap-x-2 px-4 justify-center">
            {Users.map((user, index) => (
                <div key={index} className="h-5/6 w-auto flex flex-col justify-center items-center">
                    <img src={user.icon} alt={user.name} className="h-full w-full rounded-full" />
                    <div>{user.name}</div>
                    <div>{user.score}</div>
                    <div>{index+1}{position(index)}</div>
                </div>
            ))}
        </div>
    )
}

export default ScoreBoard;
