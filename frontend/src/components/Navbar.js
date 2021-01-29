import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import {Button} from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import InfoIcon from '@material-ui/icons/Info';
import PollIcon from '@material-ui/icons/Poll';


const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  margin-top: 10px;
`
const LogoContainer = styled.div `
display: flex;
align-content: left;
justify-content: center;
width: 10%
`

const Logo = styled.h1`
    font-size: 20px;
`

const NavText = styled.h2`
    font-size: 16px;
`
const NavbarLinks = styled.div`
display: flex;
flex-direction: row;
align-items:center;
justify-content: space-around;
width:50%;
`


export const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <NavLink to='/'>
          <Logo><AcUnitIcon /></Logo>
        </NavLink>
      </LogoContainer>
      <NavbarLinks>
        <NavLink to='/about'>
          <NavText>
            <Button variant="outlined" color="primary" href="#outlined-buttons"><InfoIcon/> About </Button>
          </NavText>
        </NavLink>
        <NavLink to='/systemicconsensing'>
          <NavText>
            <Button variant="outlined" color="primary" href="#outlined-buttons"><PollIcon/> Systemic Consensing </Button>
          </NavText>
        </NavLink>
      </NavbarLinks>
      
    </NavContainer>
  )
}