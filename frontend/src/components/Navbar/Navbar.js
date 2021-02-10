import React from 'react';
import { useDispatch } from 'react-redux'

import { Burger } from './Burger';
import { Logo, Nav, LogoStyledLink } from '../../lib/Styling'
import { poll } from '../../reducer/poll'

export const Navbar = () => {
  const dispatch = useDispatch()

  const resetState = () => {
    dispatch(poll.actions.setPollTopic({ topic: ''}))
    dispatch(poll.actions.setPollId(null))
    dispatch(poll.actions.setPollOptions({ options: [] }))
  }

  return (
    <Nav>
      <div className='logo'>
        <LogoStyledLink 
          to='/' 
          style={{ textDecoration: 'none' }}
          onClick={resetState}>
          <Logo>POLLIC - systemic consensing</Logo>
        </LogoStyledLink>
      </div>
      <Burger />
    </Nav>
  )
}

