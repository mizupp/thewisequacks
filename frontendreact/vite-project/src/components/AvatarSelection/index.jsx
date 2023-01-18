import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	image9,
	image10,
	image11,
	image12,
	image13,
	image14,
	image15,
	image16,
	image17,
	image18,
	image19,
	image20,
	image21,
	image22, 
	image23
} from "../../img"
import { setIcon } from "../../actions"
//instead of Avatar selection maybe make this the playercard file
//so will contain the avatar and the username
const AvatarSelection = () => {
	const [avatars, setAvatars] = useState([
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
		image9,
		image10,
		image11,
		image12,
		image13,
		image14,
		image15,
		image16,
		image17,
		image18,
		image19,
		image20,
		image21,
		image22, 
		image23
	])

	const [selectedAvatar, setSelectedAvatar] = useState("")
	const icon = useSelector(state => state.icon)
		
	const onSelect = (a) => {
		setSelectedAvatar(a)
		setIcon(a)
		
	}

	return (
		<div className="flex flex-col items-center justify-stretch gap-4 w-full h-full bg-gray-800 rounded-lg p-4 border-2 border-solid border-black drop-shadow-lg text-white">
			<div>Player choose your avatar:</div>
			<div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-6xl">
				{avatars.map((a, i) => (
					<img
						src={a}
						id={a}
						key={i}
						className={`h-20 w-20 ${
							a == selectedAvatar ? "opacity-20" : "opacity-100"
						}`}
						onClick={() => onSelect(a)}
					/>
				))}
			</div>
		</div>
	)
}

export default AvatarSelection
