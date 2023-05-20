import express from 'express'
//for environment variables
import dotenv from 'dotenv'
dotenv.config()

//cookie parser import
import cookieParser from 'cookie-parser'

// error middleware handling import
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

//mongoDB connection import
import connectDB from './config/db.js'

//check port
const port = process.env.PORT || 5000

//api routes import
import userRoutes from './routes/userRoutes.js'

//mongoDB connection
connectDB()

//initialize express
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//cookie parser
app.use(cookieParser())

//api routes uses
app.use('/api/users', userRoutes)

//error middleware handling uses
app.use(notFound)
app.use(errorHandler)

// server run messages
app.get('/', (req, res) => res.send('Server is ready'))
app.listen(port, () => console.log(`Server started on port ${port}`))
