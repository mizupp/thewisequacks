import { io } from "socket.io-client"
import { useSelector } from "react-redux"
// import { SocketContext } from '../App';

// const socket = useSelector(state => state.socket)
// const socket = useContext(SocketContext)

const updateUser = (socket, playerInfo, room) => {
    io.socket.emit('update player', (playerInfo, room))
}

export { updateUser }
