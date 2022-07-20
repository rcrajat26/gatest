import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/browse'>Browse</NavLink>
        <NavLink to='/add-fund'>Add funds</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
    </nav>
  )
}

export default Navbar
