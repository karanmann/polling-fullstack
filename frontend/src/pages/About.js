import React, { useState, useRef, useEffect } from 'react'

import { 
  LinkBorderContainer,
  Container} from '../lib/Styling'

export const About= () => {
  return (
    <>
      <Container>
        <LinkBorderContainer>
          <h1 className='heading'>About us</h1>
          <p className='about-text'>
            This page was built as a graduation project by three developers, participating 
            in the Bootcamp for Frontend Developers at Technigo in Stockholm, Sweden. 
          </p>
          <p className='about-text'>
            The idea was born when a friend of one of the developers talked about her work
            as a social worker with kids and teens. There, only following the majority in decisions 
            for group activities sometimes could mean that you fail to see thoughts and feelings of some
            individuals that deserve attention. It puts minorities into a hard position. 
            And it might let you miss alternatives that actually would have everyone's support. 
          </p>
          <p className='about-text'>
            We felt, that this is not only the case in groups of kids and teens, but even in work life, 
            families, sport teams or whichever group you might be a member of. This is why we decided to build a
            tool to easily practice this way of consense-finding. This is why we made POLLIC.
          </p>
          <p className='about-text'>
            If you want to know more about us, visit us here:
            {/* Insert Links to our portfolios here */}
            <ul>
              <li>
                <a href='https://ingelalofgren-portfolio.netlify.app/'>Ingela Löfgren</a>
              </li>
              <li>
                <a href='https://henrikewiemker-portfolio.netlify.app/'>Henrike Wiemker</a>
              </li>
              <li>
                <a href='https://karanmann.netlify.app/'>Karan Mann</a>
              </li>
            </ul>
          </p>
        </LinkBorderContainer>
      </Container>
    </>
  )
}