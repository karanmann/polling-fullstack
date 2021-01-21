import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { poll } from '../reducer/poll'
import { Option } from '../components/Option'

import { Table } from '../components/Table'

export const CreatePoll= () => {
  const dispatch = useDispatch()

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

  return (
    <>
      { showTopic && 
        <section>
          <h1>Create poll</h1>
          <form onSubmit={handleShowOptions}>
            <label>
            <input 
            type='text'
            value={newTopic}
            onChange={event => setNewTopic(event.target.value)}
            />
            Topic
            </label>
            <button type='submit'>Next step</button>
          </form>
        </section>
      }
      { showOptions && 
        <section>
          <h1>Add options</h1>
          <form onSubmit={onAddOption}>
            <input 
            type='text' 
            value={newOption}
            onChange={event => setNewOption(event.target.value)}
            />
            <button type='submit'>Add</button>
          </form>
            {allOptions.map((option) => (
              <Option 
                key={option.id}
                option={option} />
            ))}
            <button onClick={handleBackToTopic}>Back</button>
            <button onClick={handleShowSummary}>Create poll and see summary</button> {/* maybe only 'next step' here */}
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