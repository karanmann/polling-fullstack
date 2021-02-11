import React, { useState, useRef, useEffect } from 'react'
import Confetti from 'react-confetti'
import { ConfettiDiv } from '../lib/Styling'

export const Confettis = () => {
  const [height, setHeight] = useState(null)
  const [width, setWidth] = useState(null)
  const [show] = useState(false)
  const confettiRef = useRef(null)

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight)
    setWidth(confettiRef.current.clientWidth)
  }, [])

  return (
    <>
      <ConfettiDiv
        ref={confettiRef}>
          <Confetti
            recycle={show}
            numberOfPieces={800}
            width={width}
            height={height}/>
      </ConfettiDiv>
    </>
  )
}