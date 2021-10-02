const express = require ('express')
const body_parser = require('body-parser')
const cors = require('cors')
const app = express()


app.use(body_parser.urlencoded({extended: true}))
app.use(body_parser.json())
app.use(cors());

const db_manager = require('./persistence/dbmanager')

///////// CRUD ///////////////
///////// CREATE ----------- POST
app.post('/product',(req,res) =>{
    db_manager.product_create(req, res)
})

///////// READ ----------- GET
app.get('/product',(req,res) =>{
    db_manager.product_read(req,res)
})

///////// UPDATE ----------- PUT
app.put('/product',(req,res) =>{
    db_manager.product_update(req,res)
})

///////// DELETE ----------- DELETE
app.delete('/product',(req,res) =>{
    db_manager.product_delete(req,res)
})

app.get('/', (req, res) =>{
 res.send("Hola Mundo")   
})

app.listen(8985, () =>{
    console.log("API REST is running 8985 !!!!!")
})