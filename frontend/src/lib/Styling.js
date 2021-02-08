import styled from 'styled-components/macro'

// NAVBAR

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  margin-top: 10px;
  margin:0;
`

export const LogoContainer = styled.div `
  display: flex;
  align-content: left;
  justify-content: center;
  width: 10%
`

export const LogoImage = styled.img`
  height: 60px;
  width: 60px;
  margin-top: 30px
`

export const Logo = styled.h1`
  font-size: 20px;
  text-decoration: none;
`

export const NavText = styled.h2`
  font-size: 14px;
  color: #364177;

  @media (min-width: 1200px) {
    font-size: 20px;
  }
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
  /* max-height: 80vh; */

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`
export const InfoImage = styled.div`
  width: 90%;

  @media (min-width: 668px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
  `
export const InfoText = styled.div`
  width: 100%;
  background-color: #E5F6F1;
  text-align: center;
  font-size: px;

@media (min-width: 1200px) {
  width: 50%;
  padding:  60px;
  font-size: 20px;
  border-radius: 10px;
  height: 500px;
}
`

export const InfoTextH1 = styled.h1`
  margin: 20px 0;

`

export const InfoTextP = styled.p`
  margin-bottom: 20px;
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
  font-size: 18px;
  &:hover {
      opacity: 1
    }
`

//CREATE POLL

export const HeaderPoll = styled.h1`
  text-align: center;
  padding: 30px;
`

export const Form = styled.form`
  display: flex;  
  flex-direction: column;
  text-align: center;
`

/* export const InputTopic = styled.input`
   margin-bottom: 60px;
   margin-top: 10px;
   display: block;
   padding: 10px 15px;
` */

export const AddButton = styled.button`
  display: inline-block;
  margin-left: 10px;
`

/* export const InputOptions = styled.input`
  margin-bottom: 60px;
  margin-right: 20px;
  width: 50%;
  padding: 10px 15px;
` */

export const PollContainer = styled(Container)`
  background-color: #E5F6F1;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center
`

export const PollTopicInput = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px
`

export const CreatePollContainer = styled.section`
  /* padding: 2.5rem; */
  width: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;   
`
export const SummaryButtons = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center
`

export const NavigationInput = styled.input `
  margin-bottom: 30px;
  background-color: #fdd835;
  border: none;
  opacity: 0.8;
  font-size: 18px;
  margin: 5px 10px;
  padding: 15px 15px;
  /* height: 35px; */
  word-wrap: break-word;
  &:hover {
      opacity: 1
    }
`

export const OptionButtons = styled.div`
  margin: 0 50px;

`

// SUMMARY
export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height:fit
`

export const SummaryForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`

export const SummaryFormLabel = styled.label`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export const Select = styled.select`
  border-radius: 4px;
  font-size: 14px;
  width: 80px;
  border: none;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  margin: 0;      
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image:
    linear-gradient(45deg, transparent 50%, blue 50%),
    linear-gradient(135deg, blue 50%, transparent 50%),
    linear-gradient(to right, skyblue, skyblue);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    100% 0;
  background-size:
    5px 5px,
    5px 5px,
    2.5em 2.5em;
  background-repeat: no-repeat;
  
  &:focus  {
  background-image:
    linear-gradient(45deg, white 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, white 50%),
    linear-gradient(to right, gray, gray);
  background-position:
    calc(100% - 15px) 1em,
    calc(100% - 20px) 1em,
    100% 0;
  background-size:
    5px 5px,
    5px 5px,
    2.5em 2.5em;
  background-repeat: no-repeat;
  border-color: grey;
  outline: 0;
}
  `

// component OPTION
export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const AddOption = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px;
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
  justify-content: center;
  background-color: #E5F6F1;
  height: 550px;
`
export const LinkInput = styled.input`
  background-color: #E5F6F1;
  width: 80%;
  border: none;
  text-align: center;
  font-size: 20px;
  @media (min-width: 1200px) {
    background-color: whitesmoke;
  }
`
export const LinkButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`
export const LinkBorderContainer = styled.div `
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1200px) {
    border: 1px solid grey;
    box-shadow: 2px 3px #888888;
    width:50%;
    background-color: whitesmoke
  }
`

//VOTING CONTAINER

export const VotingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #E5F6F1;
  padding-bottom: 60px;
`
export const VotingForm = styled.form`
display: flex;
flex-direction: column;
margin-top: 30px
`

export const VotingTextContainer = styled.div`
  margin: 30px;
  text-align: left;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  font-size: 14px
`

export const VotingP = styled.p`
  margin-top : 20px;
  font-size: 20px;
`
export const VotingPI = styled.p`
  font-size: 14px
`

export const YourName = styled.label`
  display: flex;
  flex-direction: row;
  margin: 30px;
  justify-content: space-evenly;
  align-items: center;
  font-size: 16px
`

export const VotingButton = styled.input `
  margin-top: 10px;
  margin-bottom: 40px;
  background-color: #fdd835;
  border: none;
  padding: 15px 25px;
  opacity: 0.8;
  font-size: 18px;
  width: auto;
  &:hover {
      opacity: 1
    }
`

export const ButtonContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

//VOTING RESULTS 

export const EachResult = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 400px;
  padding: 30px 0;
  font-size: 20px;
  border: ${props => props.true === 0 ? 'solid green 2px' : ''}
`

export const ResultContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #E5F6F1;
  width: 100%

`


//FOOTER

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #364177;
  color: white;
  width: 100%;
  height: 60px;
  padding: 10px 0;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  font-size: 10px
`

export const IconImage = styled.img`
  height: 30px;
  width: 30px,
`

export const IconButton = styled.button`
  border: none;
  margin: 0 10px;
  background-color: #E5F6F1;
`

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 25px
`