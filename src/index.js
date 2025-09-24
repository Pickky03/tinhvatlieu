import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv';
import authRouter from './router/authRouter.js'
import userRouter from './router/userRouter.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT 

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
// connect mongo
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err))



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
