import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

import { Burger } from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 60px;
/*   border-bottom: 0.2px solid grey; */
  /* box-shadow: 0 8px 6px -6px black; */
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 20%);

  .logo {
    padding: 20px 0;
  }
`


export const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>
        <NavLink to='/' style={{ textDecoration: 'none' }}>
          <h3>POLLIC - systemic consensing</h3>
        </NavLink>
      </div>
      <Burger />
    </Nav>
  )
}


// import React from 'react'
// import { NavLink } from 'react-router-dom'

// import { 
//   NavContainer,
//   LogoContainer,
//   NavText,
//   NavbarLinks,
//   LinkButton} from '../lib/Styling'

// export const Navbar = () => {
//   return (
//     <NavContainer>
//       <LogoContainer>
//         <NavLink to='/' style={{ textDecoration: 'none' }}>
//           <LinkButton>
//             <NavText>HOME</NavText>
//           </LinkButton>
//         </NavLink>
//       </LogoContainer>
//       <NavbarLinks>
//         <NavLink to='/about' style={{ textDecoration: 'none' }}>
//           <LinkButton>
//             <NavText>ABOUT</NavText>
//           </LinkButton>
//         </NavLink>
//         <NavLink to='/systemicconsensing' style={{ textDecoration: 'none' }}>
//             <LinkButton>
//               <NavText>SYSTEMIC CONSENSING</NavText>
//             </LinkButton>
//         </NavLink>
//       </NavbarLinks>
//     </NavContainer>
//   )
// }
