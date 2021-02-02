import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { poll } from '../reducer/poll'
import { 
  AddOption, 
  OptionText, 
  OptionButton, 
  OptionsContainer,
  IconImage,
  IconButton,
  AddOptionInput
  } from '../lib/Styling'

  import editicon from '../assets/pencil.svg'
  import deleteicon from '../assets/delete.svg'
  import confirmicon from '../assets/check.svg'

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
            <IconButton onClick={handleEditOption}>
              <IconImage src={editicon} alt='edit'/>
            </IconButton>
            <IconButton onClick={onOptionDelete}>
              <IconImage src={deleteicon} alt='edit'/>
            </IconButton>
          </OptionButton>
        </AddOption>
      }
      {!textOkay && 
        <AddOption>
          <OptionText>
            <AddOptionInput
            type="text"
            value={changedOption}
            onChange={event => setChangedOption(event.target.value)}
          />
          </OptionText>
          <OptionButton>
            <IconButton onClick={onOptionChange}>
              <IconImage src={confirmicon} alt='edit'/>
            </IconButton>
            <IconButton onClick={onOptionDelete}>
              <IconImage src={deleteicon} alt='edit'/>
            </IconButton>
          </OptionButton>
        </AddOption>
      }
    </OptionsContainer>
  )
}