import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <NavLink to='/'>
        <h1>Logo</h1>
      </NavLink>
      <NavLink to='/about'>
        <h1>About</h1>
      </NavLink>
    </>
  )
}