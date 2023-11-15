import express from 'express'
import dotenv from 'dotenv';
dotenv.config()

const port = process.env.port || 3200

const app = express()
app.use(express.json())

import errorHandler from './middleware/errorMiddleware.js';

app.get('/api', (req,res)=>{
    res.status(200).json({ message: "Server is working"});
});

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})