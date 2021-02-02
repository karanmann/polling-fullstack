import React from 'react'
import { Link } from 'react-router-dom'

import { 
  Container, 
  InfoText, 
  Image, 
  InfoImage, 
  NavigationButton,
  InfoTextH1,
  InfoTextP
  } from '../lib/Styling'
import schedule from '../assets/booking_schedule.jpg'

export const LandingPage= () => {
  return (
      <Container>
       <InfoText>
          <InfoTextH1>Welcome</InfoTextH1>.
          <InfoTextP>Making decisions in a group should be easy.. With systemic consensing your decisions will be... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </InfoTextP>
          <Link to='/createpoll'>
            <NavigationButton>Create new poll</NavigationButton>
          </Link>
        </InfoText>
        <InfoImage>
        <Image src={schedule} alt='hands'/>
       </InfoImage>  
      </Container>   
  )
}