# polling-fullstack

POLLIC is a responsive React web app developed by Henrike Wiemker, Karan Mann and Ingela Löfgren. The app is a final project of the Technigo Frontend bootcamp. 
 
POLLIC is a polling tool based on systemic consensing which means that instead of looking for the alternative with the strongest support, it looks for the alternative with least resistance. You can read more about it here: https://pollic.netlify.app/systemicconsensing
 
In the web app you can create a poll with a topic and add options to it. You can share the link to the poll by a simple click to copy it or use social media buttons. After the users have submitted their votes, they will get the current result of the poll. The option with least objection points is the winner.

## The building process
 
We started by doing a detailed plan for the project. We made a sketch in Miro for each view, what functionality they should have and a preliminary styling plan. 

### Backend
In the backend we have created two mongoose models. One model ('Poll') is used when a person creates a poll, and the other model ('FinishedPoll') is when a user votes and get the result of the poll. The models are connected through id:s which is explained in the endpoints.
 
### Endpoints:
 
- POST /poll 
  When a person creates a poll and adds a topic and options to vote for. Each poll gets a pollId that is used to identify that poll.
 
- GET /poll/:id
  Shows the topic and the options to vote for of a specific poll (through its pollId). 
 
- POST /finishedPoll
  When a user votes on the options by giving them objections points. The pollId is sent to the backend to identify it. A unique id is generated for every option in the poll (pollOptionId) which is connected to the pollOptions in the Poll-model.
 
- GET /finishedpoll/:pollId
  Shows the results from a specific poll.

### Frontend
 
The frontend is built with seven routers: Landing page, Create poll, Polling Link, Voting, Voting results, About and Systemic consensing.
The Create poll router has all the steps to create the poll and each step is conditionally rendered, 3 views in total. The rest of the routers only have one view per router.
 
We are using redux to store a created poll before it is sent to the backend. However, when a person is voting we use the internal state before we send the votes to the backend since redux wasn't really needed.
 
The voting results was one of the hardest parts of the project since we had to rebuild the data structure a couple of steps in order to sum up the results from every option and eventually create an array with arrays that we could map through. The result page then shows the options with the total sum of objections points for each option.
 
### Tech used
 
- Node.js
- Mongo DB
- Mongoose
- Express
- React
- Redux
- Npm packages ( React-Share, SweetAlerts & React Confetti)
- Styled components
- Material UI

### View it live
 
- Check out and try our project here! 
- https://pollic.netlify.app/


- Backend: 
- https://systemic-poll-app.herokuapp.com/

## Contributors :-

 ### Henrike Wiemker - https://github.com/HenrikeW

 ### Ingela Löfgren - https://github.com/IngelaL
 ### Karan Mann - https://github.com/karanmann
