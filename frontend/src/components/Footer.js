import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: beige;
  padding: 30px;
`


export const Footer= () => {
  return (
    <FooterContainer>
      <p>Made by Karan Mann, Ingela Löfgren, Henrike Wiemker</p>
    </FooterContainer>
  )
}