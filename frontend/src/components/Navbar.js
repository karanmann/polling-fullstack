import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

import { 
  NavContainer,
  LogoContainer,
  NavText,
  NavbarLinks,
  LinkButton} from '../lib/Styling'

export const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <NavLink to='/'>
          <LinkButton>
            <NavText>HOME</NavText>
          </LinkButton>
        </NavLink>
      </LogoContainer>
      <NavbarLinks>
        <NavLink to='/about'>
          <LinkButton>
            <NavText>ABOUT</NavText>
          </LinkButton>
        </NavLink>
        <NavLink to='/systemicconsensing'>
            <LinkButton>
              <NavText>SYSTEMIC CONCENSING</NavText>
            </LinkButton>
        </NavLink>
      </NavbarLinks>
    </NavContainer>
  )
}