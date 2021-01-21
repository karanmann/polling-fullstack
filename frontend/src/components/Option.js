import React from 'react'
import { useDispatch } from 'react-redux'

import { poll } from '../reducer/poll'

export const Option = ({ option }) => {
  const dispatch = useDispatch()

  const onOptionDelete = () => {
    dispatch(poll.actions.deleteOneOption(option.id))
  }
  return (
    <>
      <p>{option.text}</p>
      <button onClick={onOptionDelete}>Delete</button>
    </>
  )
}