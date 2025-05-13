import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

//Middleware
app.use(express.json())
app.use(cors)


//Routes

//Error


//Server

app.listen(()=> {
    console.log(`Server running ${port}`)
})