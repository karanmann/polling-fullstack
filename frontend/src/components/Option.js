import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { poll } from '../reducer/poll'
import { 
  AddOption, 
  OptionText, 
  OptionButton, 
  OptionsContainer 
  } from '../lib/Styling'

export const Option = ({ option }) => {
  const dispatch = useDispatch()
  const [textOkay, setTextOkay] = useState(true)
  const [changedOption, setChangedOption] = useState(option.text)

  const onOptionDelete = () => {
    dispatch(poll.actions.deleteOneOption(option.optionId))
  }

  const handleEditOption = () => {
    setTextOkay(false)
  }

  const onOptionChange = () => {
    const updatedOption = {
      optionId: option.optionId,
      text: changedOption
    }
    dispatch(poll.actions.changeOneOption(updatedOption))
    setTextOkay(true)
  }

  return (
    <OptionsContainer>
      {textOkay && 
        <AddOption>
          <OptionText>
            <p>{option.text}</p>
          </OptionText>
          <OptionButton>
            <button onClick={handleEditOption}>✍️ Edit</button>
            <button onClick={onOptionDelete}>🗑️ Delete</button>
          </OptionButton>
        </AddOption>
      }
      {!textOkay && 
        <AddOption>
          <OptionText>
            <input 
            type="text"
            value={changedOption}
            onChange={event => setChangedOption(event.target.value)}
          />
          </OptionText>
          <OptionButton>
            <button onClick={onOptionChange}>✔️ Done</button>
            <button onClick={onOptionDelete}>🗑️ Delete</button>
          </OptionButton>
        </AddOption>
      }
    </OptionsContainer>
  )
}