import React, { useState, useRef, useEffect } from 'react'
import Confetti from 'react-confetti'
import styled from 'styled-components/macro'

const Div = styled.div `
  width: auto;
  height: 3000px;
`

export const Confettis = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, [])

  return (
    <>
      <Div
        ref={confettiRef}>
          <Confetti
            recycle={show}
            numberOfPieces={800}
            width={width}
            height={height}
        />
      </Div>
    </>
  );
}