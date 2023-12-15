import express from 'express';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const apiPort = process.env.PORT || 3000;
const app = express();

const pool = new Pool({
    connectionString: process.env.DB_URL
})

//  ------------------------------------------------------------ MIDDLEWARE

app.use(cors());
app.use(express.json());
// app.use(express.static('public'))
app.use('/', (req, res) =>{
    res.send(`Server is running`)
})

app.listen(apiPort, console.log(`Server started on PORT localhost:${apiPort}`))

//  ------------------------------------------------------------ DB API ROUTES


