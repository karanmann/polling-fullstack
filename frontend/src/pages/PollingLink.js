import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  FacebookShareButton, 
  FacebookIcon, 
  WhatsappShareButton, 
  WhatsappIcon, 
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

import { poll } from '../reducer/poll'

import {
  LinkInput,
  HeaderPoll, 
  LinkContainer, 
  NavigationButton,
  NavigationButtonBack,
  LinkButtonContainer,
  LinkBorderContainer,
  SocialLinks} from '../lib/Styling'

export const PollingLink= () => {
  const dispatch = useDispatch()
  const pollId = useSelector((store) => store.poll.pollId) // change if we solve the nesting problem
  /* const url = `https://romantic-tesla.netlify.app/voting/${pollId}` */
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
      <LinkBorderContainer>
        <HeaderPoll>Here's the link to your poll...</HeaderPoll>
        <LinkInput id='linkUrl' defaultValue={url}></LinkInput>
        <LinkButtonContainer>
          <NavigationButton onClick={() => copyLink()}>Copy Link</NavigationButton>
          <Link to='/'>
            <NavigationButtonBack onClick={resetState} >Back to Start Page</NavigationButtonBack>
          </Link>
          <SocialLinks>
            <FacebookShareButton url={url} >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <WhatsappShareButton url={url} >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <FacebookMessengerShareButton url={url}>
              <FacebookMessengerIcon size={32} round/>
            </FacebookMessengerShareButton>
            <EmailShareButton url={url}>
              <EmailIcon size={32} round/>
            </EmailShareButton>
          </SocialLinks>
        </LinkButtonContainer>
      </LinkBorderContainer>
    </LinkContainer>
  )
}