import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import pollhik from '../assets/Pollhik_text.png'
import pollhiklogo from '../assets/Pollhik_logo.png'

import { 
  NavContainer,
  LogoContainer,
  NavText,
  NavbarLinks,
  LinkButton,
  LogoImage} from '../lib/Styling'

export const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <NavLink to='/' style={{ textDecoration: 'none' }}>
          <LinkButton>
        {/*     <LogoImage src={logo} alt='logo' /> */}
            <LogoImage src={pollhik} alt='logo' />
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