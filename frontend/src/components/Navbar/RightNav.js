import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 20px;
  justify-content: space-evenly;
  li {
    padding: 10px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #478cc5;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 25vh;
    width: 100vw;
    padding-top: 2.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

export const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <NavLink to='/about' style={{ textDecoration: 'none' }}>
        <li>About</li>
      </NavLink>
      <NavLink to='/systemicconsensing' style={{ textDecoration: 'none' }}>
        <li>Systemic Consensing</li>
      </NavLink>
    </Ul>
  )
}
