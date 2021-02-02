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
        <NavLink to='/' style={{ textDecoration: 'none' }}>
          <LinkButton>
            <NavText>HOME</NavText>
          </LinkButton>
        </NavLink>
      </LogoContainer>
      <NavbarLinks>
        <NavLink to='/about' style={{ textDecoration: 'none' }}>
          <LinkButton>
            <NavText>ABOUT</NavText>
          </LinkButton>
        </NavLink>
        <NavLink to='/systemicconsensing' style={{ textDecoration: 'none' }}>
            <LinkButton>
              <NavText>SYSTEMIC CONSENSING</NavText>
            </LinkButton>
        </NavLink>
      </NavbarLinks>
    </NavContainer>
  )
}