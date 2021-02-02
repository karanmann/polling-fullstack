import React from 'react'
/* import { useSelector } from 'react-redux' */

export const Summary = ({allOptions, pollTopic}) => {
  const points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      <h1>This is how your poll will look like</h1>
      <p>{pollTopic}</p>
      <form>
        {allOptions.map((item) => (
          <label>{item.text}
            <select disabled>
              {points.map((point) => (
                <option value={point}>{point}</option>
              ))}
            </select>
          </label>
        ))}
      </form>
    </>
  )
}