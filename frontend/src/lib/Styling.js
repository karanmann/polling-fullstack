import styled from 'styled-components/macro'

//LANDING PAGE

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InfoText = styled.div`
    width: 100%;
    background-color: #E5F6F1;
    text-align: center;
    margin-bottom: 50px;
`

export const Image = styled.img`
    width: 100%;
    height: auto;
    margin-top: 100px;
`


//CREATE POLL

export const HeaderPoll = styled.h1`
    text-align: center;
`

export const Form = styled.div`
    display: flex;  
    flex-direction: column;
    text-align: center;
`

export const InputTopic = styled.input`
   margin-bottom: 60px;
   margin-top: 10px;
   display: block;
`

export const AddButton = styled.button`
    display: inline-block;
    margin-left: 10px;
`

export const InputOptions = styled.input`
    margin-bottom: 60px;
`