import React, { useContext, useEffect, useState, useId } from "react"
import { SocketContext } from "../../App"

export default function Chat() {
	const socket = useContext(SocketContext)
	const [messages, setMessages] = useState([])

	useEffect(() => {
		//TODO get room id

		socket.on("new-message", ({ user, msg }) => {
			setMessages((prev) => [
				...prev,
				{ sender: user || "Anonymous", text: msg },
			])
		})
		return () => {
			socket.off("new-message")
		}
	}, [])

	function sendChatMessage(e) {
		e.preventDefault()

		const data = Object.fromEntries(new FormData(e.target))
		const { room, message } = data
		console.log("message sent")
		console.log(data)
		socket.emit("chat-message", { room, message })
	}

	return (
		<div>
			<div>
				<div>
					<h2>Room #id ??</h2>
					<div>
						{Object.values(messages).map((msg, userId) => (
							<p key={userId}>
								{msg.sender} : {msg.text}
							</p>
						))}

						{/* {messages.map((msg, useId) => <p key={useId}>{msg.sender}: {msg.text}</p>)} */}
					</div>
					<form onSubmit={sendChatMessage}>
						<div className="flex justify-around gap-2">
							<input
								className="mt-1 p-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
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
