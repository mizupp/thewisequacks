import React, { useEffect, useState } from 'react'

const AvatarSelection = () => {
    const [avatars, setAvatars] = useState(['😀', '🤣', '😋', '🧐', '😍','🥵','😴','👿', '😩', '🥺', '😢', '😭'])
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
