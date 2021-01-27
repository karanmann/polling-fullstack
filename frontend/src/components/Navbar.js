import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  `

  const Logo = styled.h1`
    font-size: 20px;
  `

  const NavText = styled.h2`
    font-size: 16px;
    
  `


export const Navbar = () => {
  return (
    <NavContainer>
      <NavLink to='/'>
        <Logo>Logo</Logo>
      </NavLink>
      <NavLink to='/about'>
        <NavText>About</NavText>
      </NavLink>
      <NavLink to='/systemicconsensing'>
        <NavText>Systemic consensing</NavText>
      </NavLink>
    </NavContainer>
  )
}