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

  const handleShow = toggle => {
    setShow(toggle);
  }

  return (
    <>
      <Div
        onMouseEnter={() => handleShow(true)}
        onMouseLeave={() => handleShow(false)}
        className="confetti-wrap"
        ref={confettiRef}>
          <Confetti
          recycle={show}
          numberOfPieces={500}
          width={width}
          height={height}
        />
      </Div>
    </>
  );
}