import React, { useContext, useEffect, useState, useId } from "react"
import { SocketContext } from "../../App"
import { useSelector, useDispatch } from "react-redux"
import { updateLocalUser } from "../../actions"
export default function Chat() {
	
	// const socket = useContext(SocketContext)
	const [messages, setMessages] = useState([])
	const socket = useSelector(state => state.socket);
	const data = useSelector((state) => state.gameState)
	const user = useSelector(state => state.user);
	const room = useSelector(state => state.gameState.room)
	console.log(user)
	useEffect(() => {
		//TODO get room id

		socket.on("new-message", ({ user, msg }) => {
			setMessages((prev) => [
				...prev,
				{ sender: user.name || "Anonymous", text: msg },
			])
		})
		return () => {
			socket.off("new-message")
		}
	}, [])

	function sendChatMessage(e) {
		
		e.preventDefault()
		const data = Object.fromEntries(new FormData(e.target))
		const { room , message } = data
		// console.log({room, message})
		socket.emit("chat-message", { room, message })
	}

	return (
		<div>
			<div>
				<div>
					{/* <h2>{room}</h2> */}
					<div>
						{Object.values(messages).map((msg, user) => (
							<p key={user}>
								{msg.sender} : {msg.text}
							</p>
						))}

						{/* {messages.map((msg, useId) => <p key={useId}>{msg.sender}: {msg.text}</p>)} */}
					</div>
					<form onSubmit={sendChatMessage}>
						<div className="flex justify-around gap-2">
							<input
								className="mt-1 p-1 w-full rounded-md border border-green-200 bg-white text-sm text-gray-700 shadow-sm"
								type="text"
								name="message"
								placeholder="Message"
								required
							></input>
							<input type="submit" value="Send"></input>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
