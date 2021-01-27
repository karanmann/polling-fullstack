import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@material-ui/core'

import {  HeaderPoll, Container } from '../lib/Styling'

export const PollingLink= () => {
  return (
    <Container>
      <HeaderPoll>Tadaa your link</HeaderPoll>
      <p>www.example.com/yourlink</p>
       {/* <a href="#">www.example.com/yourlink</a> */}
      <Button variant='contained' color='secondary'>Copy Link</Button>
      <Link to='/'>
        <Button variant='contained' color='primary'>Back to Start Page</Button>
      </Link>
    </Container>
  )
}