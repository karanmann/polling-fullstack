import React from 'react'
import { useSelector } from 'react-redux'

export const Summary = ({allOptions, pollTopic}) => {
  return (
    <>
      <h1>Poll Topic</h1>
      <p>{pollTopic}</p>
      {allOptions.map((item) => (
        <p>{item.text}</p>
      ))}
    </>
  )

}