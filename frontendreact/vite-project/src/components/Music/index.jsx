import { useState, useRef } from "react"
import { jFrench } from "./Sound"

function MusicP() {
	const [playing, setPlaying] = useState(false)

	const audioRef = useRef(new Audio(jFrench))

	const play = () => {
		setPlaying(true)
		audioRef.current.play()
	}

	const pause = () => {
		setPlaying(false)
		audioRef.current.pause()
	}
	return (
		<button onClick={playing ? pause : play}>
			{playing ? <pause /> : <play />}
			Music{" "}
		</button>
	)
}

export default MusicP
