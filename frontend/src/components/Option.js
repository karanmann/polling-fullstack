import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { poll } from '../reducer/poll'

export const Option = ({ option }) => {
  const dispatch = useDispatch()
  const [textOkay, setTextOkay] = useState(true)
  const [changedOption, setChangedOption] = useState(option.text)

  const onOptionDelete = () => {
    dispatch(poll.actions.deleteOneOption(option.id))
  }

  const handleEditOption = () => {
    setTextOkay(false)
  }

  const onOptionChange = () => {
    const updatedOption = {
      id: option.id,
      text: changedOption
    }
    dispatch(poll.actions.changeOneOption(updatedOption))
    setTextOkay(true)
  }

  return (
    <>
      {textOkay && 
        <>
          <p>{option.text}</p>
          <button onClick={handleEditOption}>Edit</button>
          <button onClick={onOptionDelete}>Delete</button>
        </>
      }
       {!textOkay && 
        <>
          <input 
            type="text"
            value={changedOption}
            onChange={event => setChangedOption(event.target.value)}
          />
          <button onClick={onOptionChange}>Done</button>
          <button onClick={onOptionDelete}>Delete</button>
        </>
      }
    </>
  )
}