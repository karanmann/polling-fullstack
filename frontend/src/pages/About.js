import React, { useState, useRef, useEffect } from 'react'

import { 
  LinkBorderContainer,
  Container} from '../lib/Styling'

export const About= () => {
  return (
    <>
      <Container>
        <LinkBorderContainer>
          <p>
            This page was built as a graduation project by three developers, participating 
            in the Bootcamp for Frontend Developers at Technigo in Stockholm, Sweden. 
          </p>
          <p>
            The idea was born when a friend of one of the developers talked about her work
            as a social worker with kids and teens. There, only following the majority in decisions 
            for group activities sometimes could mean that you fail to see thoughts and feelings of some
            individuals that deserve attention. It puts minorities into a hard position. 
            And it might let you miss alternatives that actually would have everyone's support. 
          </p>
          <p>
            We felt, that this is not only the case in groups of kids and teens, but even in work life, 
            families, sport teams or whichever group you might be a member of. This is why we decided to build a
            tool to easily practice this way of consense-finding. This is why we made POLLIC.
          </p>
          <p>
            If you want to know more about us, visit us on
            {/* Insert Links to our portfolios here */}
          </p>
        </LinkBorderContainer>
      </Container>
    </>
  )
}