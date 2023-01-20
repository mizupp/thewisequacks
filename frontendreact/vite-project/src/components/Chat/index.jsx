import React, { useContext, useEffect, useState, useId } from "react"
import { SocketContext } from "../../App"
import { useSelector, useDispatch } from "react-redux"

export default function Chat() {
	
	const dispatch = useDispatch()
	const messages = useSelector(state => state.messages);
	const socket = useSelector(state => state.socket);
	const user = useSelector(state => state.user);
	const room = useSelector(state => state.gameState.room)
	

	function sendChatMessage(e) {
		e.preventDefault()
		const data = Object.fromEntries(new FormData(e.target))
		const { message } = data
		socket.emit("chat-message", { room, message, name: user.name })
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
