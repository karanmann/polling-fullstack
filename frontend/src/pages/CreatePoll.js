import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { poll } from '../reducer/poll'

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
      { showTopic && 
        <section>
          <h1>Create poll</h1>
          <form>
            <label>
            <input 
            type='text'
            />
            Topic
            </label>
            <button onClick={handleShowOptions}>Next step</button>
          </form>
        </section>
      }
      { showOptions && 
        <section>
          <h1>Add options</h1>
          <form onSubmit={onAdd}>
            <input 
            type='text' 
            value={option}
            onChange={event => setOption(event.target.value)}
            />
            <button type='submit'>Add</button>
            <button onClick={handleBackToTopic}>Back</button>
            <button onClick={handleShowSummary}>Create poll and see summary</button>
          </form>
        </section>
      }
      { showSummary && 
        <section>
          <h1>Summary</h1>
          <Table />
          <button onClick={handleBackToOptions}>Back</button>
          <Link to='/pollinglink'>
            <button>Finish and create link</button>
          </Link>
        </section>
      }
    </>
  )
}