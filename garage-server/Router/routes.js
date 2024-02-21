//import express
const express=require('express')

const vehiclesController = require('../Controllers/vehiclesController')

//create router object of express to define paths
const router = new express.Router()

//Register API
router.post('/vehicle/register',vehiclesController.register)


module.exports = router
