import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/polling'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const Polling = mongoose.model('Polling', {    //Recommended to change to Poll
  // pollId: {type: String, required: [true, 'ID could not be generated']},
  pollTopic: {type: String, required: true},
  pollOptions: [{
    option: {type: String, required: true},
    optionId: {type: Number}
  }]
}) 

const PollingUsers = mongoose.model('PollingUsers', {   // Changed to FinishedPoll
  name: {type: String, required: true},
  responseId: {type: String, unique: true, required: true}, 
  pollId: {type: Number, required: true, unique: true},
  voting: [{
    optionId: {type: Number, required: true, unique: true}, //We also get one from the backend
    objectionsPoints: {
      type: Number, 
      range: {
        type: Number,
        min: {type: Number, min: 1},
        max: {type: Number, max: 10}
      }
    }
  }]
})


// generating the same pollID and OptionID on both dBases

const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

// Start defining your routes here

app.get('/', (req, res) => {
  res.send('Polling Database')
})


app.post('/poll', async (req, res) => {
  try {
    const { pollTopic, pollOptions } = req.body
    const poll = await new Polling({ 
      pollTopic, 
      pollOptions 
      }).save()
    res.status(201).json({ pollId: poll._id})
  } catch (err) {
    res.status(400).json({ message: 'Could not create poll', error: err.errors })
  }
})

app.get('/alldata', async (req,res) => {
  const alldata = await Polling.find().exec()
  res.json(alldata)
})

app.get('/summary/:id', async(req, res) => {
  const summary = await Polling.findOne({pollId: req.params._id})
  res.json(summary)
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})


//Model Working
//connecting ID
//Do we need to make more endpoints