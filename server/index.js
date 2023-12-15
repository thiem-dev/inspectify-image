import express from 'express';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const apiPort = process.env.PORT || 3000;
const app = express();

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING
})

//  ------------------------------------------------------------ MIDDLEWARE

app.use(cors());
app.use(express.json());
app.use(express.static('./public'))
// app.use('/', (req, res) =>{
//     res.send(`Server is running`)
// })

app.listen(apiPort, console.log(`Server started on PORT ${apiPort}`))

//  ------------------------------------------------------------ DB API ROUTES

app.get('/api/history', async (req, res) => {
    
    try{
        const result = await pool.query(
            `SELECT * FROM history`
        );
        if(result.rows.length === 0){
            return res.status(400).send(`no rows in history`);
        }
        res.status(201).send(result.rows);
    } catch (error){
        console.log(error)
        res.status(400).json(error)
    }
});
