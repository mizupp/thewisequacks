import React, {useState, useEffect } from 'react'
import { NavLink, Link } from "react-router-dom";
import {logo, logonb, logowb} from "../../img";
import l from "../../img/logo.png";
import "./style.css"
import MusicP from '../Music'

import {BirdSong} from '../Music/Sound';

import Worm from "../Worm"
const Header = () => {


    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };
      useEffect(() => {
        document.body.className = theme;
      }, [theme]);

    let activeStyle = {
        textDecoration: "underline",
      };
    
      let activeClassName = "underline";
  


      // const [playing, setPlaying] = useState(false);
      //   const handlePlayClick = () => {
      //     const audio = new Audio(BirdSong)
      //   audio.volume = 0.1
      //     setPlaying(prevPlaying => {
      //       if (prevPlaying) {
      //         audio.pause();
      //       } else {
      //         audio.play(); 
      //         setPlaying(true);
      //       }
      //       return !prevPlaying;
      //     });

      //   };
    

      
    return (
      <header className="headmy" aria-label="Site Header">
              
            <div className='flex flex-col'>
          <Link className="block text-teal-600 flex flex-1 items-center justify-end md:justify-center" >
            {/* <span className="sr-only">Home</span> */}
            <img className="logo" src={logowb} ></img>
          </Link>
          <div className='flex flex-col'>
          <div onClick={toggleTheme}className="wormy" ><Worm className="wormy" /></div>
          <MusicP />
          </div>
          {/* <button onClick={handlePlayClick}>Music</button> */}
           {/* <h1 className='text-5xl'>Early Birds</h1> */}
            
            </div>
      
      </header>

      // <header className="headmy" aria-label="Site Header">
      //         <div className="wormy"><Worm className="wormy" /></div>
      //   <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      //     <div className="flex flex-1 items-center justify-end md:justify-center">
      //       <div className='flex flex-col'>
      //     <Link className="block text-teal-600" to="/">
      //       <span className="sr-only">Home</span>
      //     </Link>
      //       {/* <h1 className='text-5xl'>Early Birds</h1> */}
      //       <img className="logo" src={logowb}></img>
      //       </div>
      //     </div>
      //   </div>
      // </header>
    )
}

export default Header
