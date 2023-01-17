import React from 'react'
import Header from '../header'
import Footer from '../footer'
import MyModal from '../Modal'
import Chat from '../Chat'
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
                <main className='h-full flex flex-col justify-evenly'><Outlet /></main>
            <Footer />
        </>
    )
}

export default Layout
