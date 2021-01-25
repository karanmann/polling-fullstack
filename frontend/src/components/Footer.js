import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
`


export const Footer= () => {
  return (
    <FooterContainer>
      <p>Made by Karan Mann, Ingela Löfgren, Henrike Wiemker</p>
    </FooterContainer>
  )
}