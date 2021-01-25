import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  `


export const Navbar = () => {
  return (
    <NavContainer>
      <NavLink to='/'>
        <h1>Logo</h1>
      </NavLink>
      <NavLink to='/about'>
        <h1>About</h1>
      </NavLink>
      <NavLink to='/systemicconsensing'>
        <h1>Systemic consensing</h1>
      </NavLink>
    </NavContainer>
  )
}