import React, { useState } from 'react'
import CloseMenu from '../assets/x.svg'
import MenuIcon from '../assets/menu.svg'
import Logo from '../assets/logo.svg'
import '../lib/navbar.css'

export const Navbar = () => {
  const [ click, setClick ] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="/">
            <Logo className="logo"/>
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/">ABOUT</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/">SYSTEMIC POLLING</a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? ( 
          <CloseMenu className="menu-icon" />) : ( <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>

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
