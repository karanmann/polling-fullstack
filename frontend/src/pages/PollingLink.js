import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { poll } from '../reducer/poll'

import {
  LinkInput,
  HeaderPoll, 
  LinkContainer, 
  NavigationButton,
  NavigationButtonBack } from '../lib/Styling'

export const PollingLink= () => {
  const dispatch = useDispatch()
  const pollId = useSelector((store) => store.poll.pollId) // change if we solve the nesting problem
  const url = `http://localhost:3000/voting/${pollId}`

  const resetState = () => {
    dispatch(poll.actions.setPollTopic({ topic: ''}))
    dispatch(poll.actions.setPollId(null))
    dispatch(poll.actions.setPollOptions({ options: [] }))
  }
    
  const copyLink = () => {
    document.getElementById('linkUrl').select()
    document.execCommand('copy')
  }

  return (
    <LinkContainer>
      <HeaderPoll>Tadaa your link</HeaderPoll>
      <LinkInput id='linkUrl' defaultValue={url}></LinkInput>
      <NavigationButton onClick={() => copyLink()}>Copy Link</NavigationButton>
      <Link to='/'>
        <NavigationButtonBack onClick={resetState} >Back to Start Page</NavigationButtonBack>
      </Link>
      </LinkContainer>
  )
}