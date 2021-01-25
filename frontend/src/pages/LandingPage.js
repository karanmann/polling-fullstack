import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { Container, InfoText } from '../lib/Styling'
import hands from '../assets/hands.jpg'

const Image = styled.image`

`
export const LandingPage= () => {
  return (
    <Container>
      <InfoText>
        <h1>Welcome</h1>
        <p>Making decisions in a group should be easy.. With systemic consensing your decisions will be...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </InfoText>
        <Link to='/createpoll'>
          <button>Create new poll</button>
        </Link>
       <Image>
        <img src={hands} alt='hands'/>
       </Image>
    </Container>
  )
}