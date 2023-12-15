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


//  ------------------------------------------------------------ DB API ROUTES

// get all history
app.get('/api/history', async (req, res) => {
    
    try{
        const result = await pool.query(
            `SELECT * FROM history`
        );
        if(result.rows.length === 0){
            return res.status(400).send(`No rows found in history table`);
        }
        res.status(201).send(result.rows);
    } catch (error){
        console.log(error)
        res.status(400).json(error)
    }
});

// get single row history by id
app.get('/api/history/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const result = await pool.query(
            `SELECT * FROM history
            WHERE id=$1;`, [id]
        );
        if(result.rows.length === 0){
            return res.status(400).send(`Could not find history ${id}`)
        }
        res.status(201).send(result.rows)
    } catch (error){
        console.log(error)
        res.status(400).json(error)
    }
})

// user searches term for - additional feature - might need better SQL state/logic for searching 
app.get('/api/history/:term', async (req, res) => {
    const { term } = req.params;
    try{
        const result = await pool.query(
            `SELECT class_categories FROM history
            WHERE class_categories=$1;`, [term]
        );
        if(result.rows.length === 0){
            return res.status(400).send(`Could not find row in history matching: ${term}`)
        }
        res.status(201).send(result.rows)
    } catch (error){
        console.log(error)
        res.status(400).json(error)
    }
})


//insert one row history by id
app.post('/api/history', async (req, res) => {
    const { image_url, caption, class_categories } = req.body;
    try{
        const result = await pool.query(
            `INSERT INTO history (image_url, caption, class_categories) VALUES
            ($1,$2,$3)
            RETURNING *;`, [image_url, caption, class_categories]
        );
        if(result.rows.length === 0){
            return res.status(400).send(`Could not insert history row id: ${personId}, for caption: ${caption}`)
        }
        res.send(result.rows)
    } catch (error){
        console.log(error)
        res.status(400).json(error)
    }
});

//update history
app.put('/api/history/:id', async (req, res) => {
    const { id } = req.params;
    const { image_url, caption, class_categories } = req.body;
    try{
        const result = await pool.query(
            `UPDATE history 
            SET image_ur=$1, caption=$2, class_categories=$3
            WHERE id=$4
            RETURNING *;`, [image_url, caption, class_categories, id]
        )
        if(result.rows.length === 0){
            return res.status(400).send(`could not update history row: ${id} with`)
        }
        res.send(result.rows);
    } catch (error){
        console.log(error)
        res.status(400).json(error)
    }
});

// delete one row history by id 
app.delete('/api/history/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const result = await pool.query(
            `DELETE FROM page WHERE id=$1
            RETURNING *;`, [id]
        );
        if(result.rows.length === 0){
            return res.status(400).send(`Could not delete history row id: ${id}`)
        }
        res.send(result.rows);
    } catch (error){
        console.log(error)
        res.status(400).json(error)
    }
});



//  ------------------------------------------------------------ CATCH ALL ROUTE
// app.use('/', (req, res, next) => {
//     next({message: "The path you are looking for does not exist", status: 404})
// })

// app.use((err, req, res, next) => {
//     res.status(err.status).json({ error: err })
// })

//  ------------------------------------------------------------ LISTENER METHOD

app.listen(apiPort, console.log(`Server started on PORT ${apiPort}`))



//  ------------------------------------------------------------ UTIL FUNCTIONS
