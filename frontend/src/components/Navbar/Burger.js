import React, { useState } from 'react';
import { RightNav } from './RightNav';
import { StyledBurger } from '../../lib/Styling'

export const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}