import { Victory } from "./Sound"

export default function WinnerSong() {
    const audio = new Audio(Victory)
    audio.volume = 0.1
    audio.play()
}
