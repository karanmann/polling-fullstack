import React from 'react'
import { 
  Ul,
  StyledLink
} from '../../lib/Styling'

export const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <StyledLink to='/about' style={{ textDecoration: 'none' }} >
        <li >About</li>
      </StyledLink>
      <StyledLink to='/systemicconsensing' style={{ textDecoration: 'none' }}>
        <li>Systemic Consensing</li>
      </StyledLink>
    </Ul>
  )
}
