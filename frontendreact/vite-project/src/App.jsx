import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './components/layout'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { HomePage, Game, Winner } from './pages'
import MyModal from './components/ModalButton';

function App() {
  return (
    <div className='h-screen flex flex-col justify-between'>
    <Routes>
      <Route exact path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="game" element={<Game />} />
        <Route path="winner" element={<Winner />} />
      </Route>
    </Routes>
    </div>
  )
}

export default App
