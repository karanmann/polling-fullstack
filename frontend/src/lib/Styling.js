import styled from 'styled-components/macro'

// NAVBAR

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  margin-top: 10px;
  margin:0;
  padding: 20px
`

export const LogoContainer = styled.div `
  display: flex;
  align-content: left;
  justify-content: center;
  width: 10%
`

export const Logo = styled.h1`
  font-size: 20px;
  text-decoration: none;
`

export const NavText = styled.h2`
  font-size: 20px;
  color: #364177;
`

export const NavbarLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-around;
  width: 50%;
`


export const LinkButton = styled.div`
  padding: 5px 15px;
  border-radius: 30px;
  &:hover {
    text-decoration: underline;
  }

`

//LANDING PAGE

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;

  @media (min-width: 1200px) {
    flex-direction: row;
    height: 550px;
  }
`
export const InfoImage = styled.div`
  width: 90%;

  @media (min-width: 1200px) {
    width: 30%;
  }
  `
export const InfoText = styled.div`
  width: 100%;
  background-color: #E5F6F1;
  text-align: center;
  font-size: 14px;

@media (min-width: 1200px) {
  width: 50%;
  padding: 30px 50px;
  font-size: 20px;
  border-radius: 40px;
  margin-right: 30px;
}
`

export const InfoTextH1 = styled.h1`
  margin-bottom: 0;
`

export const InfoTextP = styled.p`
  margin-top: 0;
  padding: 0px 10%
`

export const Image = styled.img`
  width: 100%;
  
  @media (min-width: 1200px) {
  width: 100%;
  margin-top: 100px;
  margin-bottom: 0;
  }
`

export const NavigationButton = styled.button `
  margin-top: 10px;
  margin-bottom: 40px;
  background-color: #fdd835;
  border: none;
  padding: 15px 25px;
  opacity: 0.8;
  font-size: 18px;
  &:hover {
      opacity: 1
    }
`

export const NavigationButtonBack = styled.button `
  margin-top: 10px;
  margin-bottom: 40px;
  background-color: #e91e63;
  border: none;
  padding: 15px 25px;
  opacity: 0.8;
  font-size: 20px;
  &:hover {
      opacity: 1
    }
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
  margin-right: 20px;
  width: 50%;
  padding: 10px 15px;
`

export const PollContainer = styled(Container)`
  background-color: #E5F6F1;
  padding-bottom: 30px;
  height: fit-content;
  display: flex;
  justify-content: center;
`

export const SummaryButtons = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center
`

export const NavigationInput = styled.input `
  margin-bottom: 10px;
  background-color: #fdd835;
  border: none;
  opacity: 0.8;
  font-size: 12px;
  width: 35px;
  height: 35px;
  &:hover {
      opacity: 1
    }
`

export const OptionButtons = styled.div`
  padding: 0 50px
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
  align-items: center;
  margin-bottom: 10px
`
export const AddOptionInput = styled.input`
  border: none;
  margin-right: 20px;
  width: 50%;
  padding: 10px 15px;
  font-size: 12px
`
export const OptionText = styled.div`
  width: 200px;
`

export const OptionButton = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-evenly
`

//LINK PAGE
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height:550px;
`
export const LinkInput = styled.input`
  width: 80%;
  border: none;
  text-align: center;
  font-size: 30px
`
//VOTING CONTAINER

export const VotingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height:550px;
`
export const VotingForm = styled.form`
display: flex;
flex-direction: column
`

export const YourName = styled.label`
  display: flex;
  flex-direction: row;
  margin: 30px;
  justify-content: space-evenly;
  align-items:
`

//FOOTER

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #364177;
  color: white;
  bottom: 0;
  width: 100%;
  height: 60px;
  padding: 30px 0;
  text-align: center;
`

export const IconImage = styled.img`
  height: 30px;
  width: 30px
`

export const IconButton = styled.button`
  border: none;
  margin: 0 10px
`