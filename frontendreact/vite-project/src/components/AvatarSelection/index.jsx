import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {image1, image2, image3, image4, image5, image6, image7, image8, image9, image10} from "../../img";
//instead of Avatar selection maybe make this the playercard file
//so will contain the avatar and the username
const AvatarSelection = () => {

    // const [images, setImages] = useState([
    //     { title: 'Title1', src: Image1, open: false },
    //     { title: 'Title2', src: Image2, open: false },
    //     { title: 'Title3', src: Image3, open: false },
    //     { title: 'Title4', src: Image4, open: false },
    //     { title: 'Title5', src: Image5, open: false },
    //     { title: 'Title6', src: Image6, open: false },
    //     { title: 'Title7', src: Image7, open: false },
    //     { title: 'Title8', src: Image8, open: false },
    //     { title: 'Title9', src: Image9, open: false },
    //     { title: 'Title10', src: Image10, open: false },
    //   ]);

    const [avatars, setAvatars] = useState(['😀', '🤣', '😋', '🧐', '😍','🥵','😴','👿', '😩', '🥺', '😢', '😭'])


    // const [avatars, setAvatars] = useState(['😀', '🤣', '😋', '🧐', '😍','🥵','😴','👿', '😩', '🥺', '😢', '😭'])
    const [selectedAvatar, setSelectedAvatar] = useState('')

    const onSelect = (e) => {
        setSelectedAvatar(e.target.value)
    }



    return (

        <div className='flex flex-col items-center justify-stretch gap-4'>
            <div>Player choose your avatar:</div>
            <div className='grid grid-cols-6 grid-rows-2 gap-4 text-6xl w-3/5'>
                {avatars.map((a, i) => <button key={i} className={a === selectedAvatar ? 'opacity-20' : 'opacity-100'} value={a} onClick={onSelect}>{a}</button>)}
            </div>
        </div>
    )
}

export default AvatarSelection
