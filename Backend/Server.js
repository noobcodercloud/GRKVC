import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import User from './Schema/Schema.js'

const app = express()

// CORS must be configured before routes
app.use(cors())
app.use(express.json())

// Connect to MongoDB
let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;
  
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', async (req, res) => {
  await connectDB();
  
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
    res.status(201).json({ message: "Success!" })
    console.log("Saved user:", user)
  } catch (error) {
    console.error("Error:", error.message);
    res.status(400).json({ error: error.message })
  }
})

const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

export default app