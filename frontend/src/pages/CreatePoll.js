import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TextField } from '@material-ui/core'

import { Option } from '../components/Option'
import { Summary } from '../components/Summary'
import { poll } from '../reducer/poll'
import { 
  Form, 
  // InputTopic, 
  // InputOptions, 
  HeaderPoll, 
  PollContainer, 
  PollTopicInput,
  NavigationButton, 
  NavigationButtonBack, 
  SummaryButtons,
  NavigationInput,
  OptionButtons,
  CreatePollContainer,
  LinkBorderContainer,
  } from '../lib/Styling'

export const CreatePoll= () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const pollId = useSelector((store) => store.poll.pollId)
  // const POLL_URL = 'https://systemic-poll-app.herokuapp.com/poll'
  const POLL_URL = 'http://localhost:9000/poll'

  // States to handle conditional rendering
  const [showTopic, setShowTopic] = useState(true)
  const [showOptions, setShowOptions] = useState(false)
  const [showSummary, setShowSummary] = useState(false)

  // States & variable to handle user input
  const [newOption, setNewOption] = useState('')
  const [newTopic, setNewTopic] = useState('')
  const allOptions = useSelector((store) => store.poll.options)

  // Function to handle conditional rendering and add a topic on first view
  const handleShowOptions = () => {
    dispatch(poll.actions.addTopic(newTopic))
    setShowTopic(false)
    setShowOptions(true)
  }

  // Function to only handle conditional rendering
  const handleBackToTopic = () => {
    setShowTopic(true)
    setShowOptions(false)
  }

  const handleShowSummary = () => {
    setShowSummary(true)
    setShowOptions(false)
  }
  
  const handleBackToOptions = () => {
    setShowOptions(true)
    setShowSummary(false)
  }

  // Function to handle adding an option
  const onAddOption = event => {
    event.preventDefault()
    dispatch(poll.actions.addOneOption(newOption))
    setNewOption('')
  }

  // Function to send poll data to the backend
  const handleFinishPoll = event => {
    event.preventDefault()
    const pollTopic = newTopic
    const pollOptions = allOptions
    fetch(POLL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ pollTopic, pollOptions })
    })
      .then((res) => res.json())

      .then((json) => {
        console.log(json)
        // if(json.error) {
        //   throw new Error('Could not create poll')
        // } else {
          dispatch(poll.actions.setPollId(json.pollId))     
        // }
      })
  }

useEffect(() => {
  if(pollId) {
    history.push('/pollinglink')
  }
}, [pollId, history])

  return (
    <>
    <PollContainer>
      { showTopic && 
        <CreatePollContainer>
        <LinkBorderContainer>
          <HeaderPoll>Create poll</HeaderPoll>
          <Form onSubmit={handleShowOptions}>
            <PollTopicInput>
              Topic of your poll:
              <TextField
                variant='filled'
                color='primary'
                style={{ margin: 10, maxWidth: 300 }}
                type='text'
                name='topic'
                value={newTopic}
                onChange={event => setNewTopic(event.target.value)}
                placeholder='Enter the topic...'
                required='required'
              />
            </PollTopicInput>
            <NavigationButton onClick={handleShowOptions}>Next step</NavigationButton>
          </Form>
        </LinkBorderContainer>
        </CreatePollContainer>
      }
      { showOptions && 
        <LinkBorderContainer>
          <CreatePollContainer>
              <HeaderPoll>Add options</HeaderPoll>
              <Form onSubmit={onAddOption}>
              <PollTopicInput>
                <TextField 
                  variant='filled'
                  color='primary'
                  style={{ margin: 10, maxWidth: 300 }}
                  type='text'
                  name='options'
                  value={newOption}
                  onChange={event => setNewOption(event.target.value)}
                  placeholder='Add new option...'
                />
                <NavigationInput type='submit' value='➕'/>
              </PollTopicInput>
              </Form>
              <OptionButtons>
                {allOptions.map((item) => (
                    <Option 
                      key={item.optionId}
                      option={item} />
                  ))}
              </OptionButtons>
              <SummaryButtons>
                <NavigationButtonBack onClick={handleBackToTopic}>Back</NavigationButtonBack>
                <NavigationButton onClick={handleShowSummary}>Create poll</NavigationButton>
              </SummaryButtons>
          </CreatePollContainer>
        </LinkBorderContainer>
      }
      { showSummary && 
        <CreatePollContainer>
        <LinkBorderContainer>
          <HeaderPoll>Summary</HeaderPoll>
          <Summary 
            allOptions={allOptions}
            pollTopic={newTopic}/>
          <SummaryButtons>
            <NavigationButtonBack onClick={handleBackToOptions}>Back</NavigationButtonBack>
            <Link to='/pollinglink'>
              <NavigationButton onClick={handleFinishPoll}>Finish and create link</NavigationButton>
            </Link>
          </SummaryButtons>
        </LinkBorderContainer>
        </CreatePollContainer>
      }
    </PollContainer>
    </>
  )
}