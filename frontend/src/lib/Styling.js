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
    padding-bottom: 30px;
`

export const Image = styled.img`
    width: 100%;
    height: auto;
    margin-top: 100px;
    margin-bottom: 0
`


//CREATE POLL

export const HeaderPoll = styled.h1`
    text-align: center;
`

export const Form = styled.form`
    display: flex;  
    flex-direction: column;
    text-align: center;
`

export const InputTopic = styled.input`
   margin-bottom: 60px;
   margin-top: 10px;
   display: block;
   padding: 10px 15px;
`

export const AddButton = styled.button`
    display: inline-block;
    margin-left: 10px;
`

export const InputOptions = styled.input`
    margin-bottom: 60px;
    padding: 10px 15px;
`

export const PollContainer = styled(Container)`
    background-color: #E5F6F1;
    padding-bottom: 30px;
    height: 550px;
    display: flex;
    justify-content: center;
`

// component OPTION
export const OptionsContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center
`
export const AddOption = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
  align-items: center
`

export const OptionText = styled.div`
width: 300px
`

export const OptionButton = styled.div`
`