import { useState, useEffect, useRef} from 'react';
import {BirdSong} from './Sound';

// function MusicP() {
//     const audio = new Audio(BirdSong)
//     audio.volume = 0.1
//     // audio.play()

// }

// export default MusicP;

function MusicP() {
  const [playing, setPlaying] = useState(false);


  const audioRef = useRef(new Audio(BirdSong));

  const play = () => {
    setPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };
  return (
        <button
          onClick={playing ? pause : play}>{playing ? <pause /> : <play />}
        Music </button>
      )

    
  }
  
  export default MusicP;
  