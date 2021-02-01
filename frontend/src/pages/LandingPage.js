import React from 'react'
import { Link } from 'react-router-dom'

import { Container, InfoText, Image, InfoImage, NavigationButton} from '../lib/Styling'
import hands from '../assets/hands.jpg'

export const LandingPage= () => {
  return (
      <Container>
        <InfoImage>
        <Image src={hands} alt='hands'/>
       </InfoImage>
        <InfoText>
          <h1>Welcome</h1>.
          <p>Making decisions in a group should be easy.. With systemic consensing your decisions will be... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <Link to='/createpoll'>
            <NavigationButton>Create new poll</NavigationButton>
          </Link>
        </InfoText>  
      </Container>   
  )
}