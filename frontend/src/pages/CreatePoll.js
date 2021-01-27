import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'

import { poll } from '../reducer/poll'
import { Form, InputTopic, InputOptions, AddButton, HeaderPoll, PollContainer } from '../lib/Styling'

import { Table } from '../components/Table'

export const CreatePoll= () => {
  const [showTopic, setShowTopic] = useState(true)
  const [showOptions, setShowOptions] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const dispatch = useDispatch()

  const [ option, setOption ] = useState('')

  const handleShowOptions = () => {
    setShowTopic(false)
    setShowOptions(true)
  }

  const handleBackToTopic = () => {
    setShowTopic(true)
    setShowOptions(false)
  }

  const handleBackToOptions = () => {
    setShowOptions(true)
    setShowSummary(false)
  }

  const handleShowSummary = () => {
    setShowSummary(true)
    setShowOptions(false)
  }

  const onAdd = event => {
    event.preventDefault()
    dispatch(poll.actions.addOneOption(option))
    setOption('')
  }


  return (
    <>
    <PollContainer>
      { showTopic && 
        <section>
          <HeaderPoll>Create poll</HeaderPoll>
          <Form>
            <label>Topic of your poll:
              <InputTopic
                type='text'
                required
              />
            </label>
            <Button onClick={handleShowOptions} variant='contained' color='primary'>Next step</Button>
          </Form>
        </section>
      }
      { showOptions && 
        <section>
          <HeaderPoll>Add options</HeaderPoll>
          <Form onSubmit={onAdd}>
          <div>
            <InputOptions 
              type='text' 
              value={option}
              onChange={event => setOption(event.target.value)}
            />
            <AddButton type='submit'>Add</AddButton></div>
            <div><Button onClick={handleBackToTopic} variant='contained' color='primary' >Back</Button>
            <Button onClick={handleShowSummary} variant='contained' color='primary'>Create poll</Button></div>
          </Form>
        </section>
      }
      { showSummary && 
        <section>
          <HeaderPoll>Summary</HeaderPoll>
          <Table />
          <Button onClick={handleBackToOptions} variant='contained' color='primary'>Back</Button>
          <Link to='/pollinglink'>
            <Button variant='contained' color='primary'>Finish and create link</Button>
          </Link>
        </section>
      }
    </PollContainer>
    </>
  )
}