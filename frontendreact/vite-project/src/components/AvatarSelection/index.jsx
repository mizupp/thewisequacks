import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18} from "../../img";
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

    const [avatars, setAvatars] = useState([image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18]);
    // console.log(avatars)

    const [selectedAvatar, setSelectedAvatar] = useState('')

    const onSelect = (a) => {
        setSelectedAvatar(a);
    }



    return (

        <div className='flex flex-col items-center justify-stretch gap-4 w-full h-full bg-gray-800 rounded p-4 border-2 border-solid border-black'>
            <div>Player choose your avatar:</div>
            <div className='grid grid-cols-3 gap-4 text-6xl'>
                {avatars.map((a, i) => <img src={a} id={a} key={i} className={`h-24 w-24 ${ a == selectedAvatar ? 'opacity-20' : 'opacity-100'}`} onClick={() => onSelect(a)}/>)}
            </div>
        </div>
    )
}

export default AvatarSelection
