import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { poll } from '../reducer/poll'
import { Option } from '../components/Option'

import { Table } from '../components/Table'

export const CreatePoll= () => {
  const [showTopic, setShowTopic] = useState(true)
  const [showOptions, setShowOptions] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const dispatch = useDispatch()

  const [ newOption, setNewOption ] = useState('')
  const allOptions = useSelector((store) => store.poll.options)

  //Functions to handle conditional rendering
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

  // Functions to handle user input
  const onAdd = event => {
    event.preventDefault()
    dispatch(poll.actions.addOneOption(newOption))
    setNewOption('')
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
            <button onClick={handleShowSummary}>Create poll and see summary</button>
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