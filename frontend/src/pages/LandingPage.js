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
          <InfoTextH1>Decisions for everyone</InfoTextH1>
          <InfoTextP>Making decisions in a group should not be about making just a few persons happy…
            The principle behind Systemic consensing is to find a solution that fits all participants. 
            The proposal with the least objection is most easily accepted by all together and generates 
            the least conflict potential.Create a poll and try it out!
          </InfoTextP>
          <Link to='/createpoll'>
            <NavigationButton>Create new poll</NavigationButton>
          </Link>
        </InfoText>
        <InfoImage>
        <Image src={schedule} alt='schedule'/>
      </InfoImage>
    </Container>
  )
}