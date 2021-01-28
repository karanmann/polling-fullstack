import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/polling'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const Poll = mongoose.model('Poll', {
  pollTopic: {type: String, required: true},
  pollOptions: [{
    text: {type: String, required: true},
    optionId: {type: Number}
  }]
}) 

const FinishedPoll= mongoose.model('FinishedPoll', {
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

const port = process.env.PORT || 9000
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
    const poll = await new Poll({ 
      pollTopic, 
      pollOptions 
      }).save()
    res.status(201).json(poll._id)
  } catch (err) {
    res.status(400).json({ message: 'Could not create poll', error: err.errors })
  }
})

app.get('/alldata', async (req,res) => {
  const alldata = await Poll.find().exec()
  res.json(alldata)
})

app.get('/summary/:id', async(req, res) => {
  const summary = await Poll.findOne({pollId: req.params._id})
  res.json(summary)
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
