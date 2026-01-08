import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import User from './Schema/Schema.js'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB_URI)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', async (req, res) => {
  try {
    const user = new User({
      Name: req.body.FullName,
      Mobile: req.body.MobileNumber,
      eMail: req.body.eMail,
      Course: req.body.CourseName,
      Query: req.body.UserQuery
    })
    await user.save()
    res.status(201).json()
    console.log(user)
  } catch (error) {
    res.status(400).json()
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})