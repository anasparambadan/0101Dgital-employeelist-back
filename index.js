import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoute from './routes/authRoute.js'
import adminRoute from './routes/adminRoute.js'




dotenv.config()
const app = express()

app.use(bodyParser.json({ extended: true, limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const port = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_DB, { useNewURLParser: true, useUnifiedTopology: true }).then(() => app.listen(port, () => console.log(`node server started at ${port}`))).catch((error) => console.log(error))

app.use('/auth', authRoute)
app.use('/admin',adminRoute)

