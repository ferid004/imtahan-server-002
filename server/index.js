import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import proRouter from '../server/src/router/proRouter.js'
const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()




app.use('/',proRouter)

const url =process.env.URL
const password =process.env.PASSWORD

mongoose.connect(url.replace("<password>",password))
    .then(() => console.log("DB connet"))
    .catch(() => console.log(" not DB connet"))


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})