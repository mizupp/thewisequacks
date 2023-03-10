import React from 'react'
import './style.css'
import { useSelector } from 'react-redux';

export default function PlayerCard({user, icon}) {
  // const icon = useSelector(state => state.icon)
 
  return (
    <div className='PlayerCard'>
        <img src={icon} alt="Player avatar" className="playerIcon"></img>
        <h3>{user}</h3>
    </div>
  )
}
