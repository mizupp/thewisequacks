import React from 'react'
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
      };
    
      let activeClassName = "underline";

    return (
      <header aria-label="Site Header">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    
          <div className="flex flex-1 items-center justify-end md:justify-center">
            <div className='flex flex-col'>
          <Link className="block text-teal-600" to="/">
            <span className="sr-only">Home</span>
            Logo
          </Link>
            <h1 className='text-4xl'>Early Birds</h1>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header
