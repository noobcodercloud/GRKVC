import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import User from './Schema/Schema.js'
const app = express()
const port = 3000

app.use(cors({
  origin: ['https://grkvc.vercel.app', 'https://grkvc-infopoint.vercel.app'],
  methods: ['GET', 'POST'],
  credentials: true
}))
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', async (req, res) => {
  try {
    console.log("Received data:", req.body);

    const user = new User({
      Name: req.body.FullName,
      Mobile: req.body.MobileNumber,
      eMail: req.body.eMail,
      Course: req.body.CourseName,
      Query: req.body.UserQuery
    })
    await user.save()
    res.status(201).json({ message: "Success!" }) // SEND A MESSAGE
    console.log("Saved user:", user)
  } catch (error) {
    console.error("Error:", error.message);
    res.status(400).json({ error: error.message }) // SEND ERROR MESSAGE
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})