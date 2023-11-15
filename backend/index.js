import express from 'express'
import dotenv from 'dotenv';
dotenv.config()

const port = process.env.port || 3200

const app = express()
app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})