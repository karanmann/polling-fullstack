import React from 'react'
import { Link } from 'react-router-dom'

import { Container, InfoText } from '../lib/Styling'



export const LandingPage= () => {
  return (
    <Container>
      <InfoText>
        <h1>Welcome</h1>
        <p>Making decisions in a group should be easy.. With systemic consensing your decisions will be...</p>
        </InfoText>
        <Link to='/createpoll'>
          <button>Create new poll</button>
        </Link>
      <section>
        <h2>How it works</h2> 
        <p>some kind of explainer text here</p>
      </section>
    </Container>
  )
}