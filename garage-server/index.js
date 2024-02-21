//load .env file  contents into process.env by default. 
require('dotenv').config()

//import express
const express=require('express')

//import cors
const cors=require('cors')

//import router 
const router=require('./Router/routes')

//create an applicatipon using express
const pfserver=express()

//use cors,exp nd rtr
pfserver.use(cors())
pfserver.use(express.json())   //api

pfserver.use(router)

//import db
const db=require('./DB/connection')

//define port
const PORT = 4000 || process.env.PORT

//
pfserver.listen((PORT),(req,res)=>{
    console.log('listening on port' +PORT);
})

//http get resolving to httpp://localhost:4000
pfserver.get('/',(req,res)=>{
    res.send('Garage Server Started!');
})

pfserver.post('/',(req,res)=>{
    res.send('Post Method');
})


