
const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    vehicle_type: {
        type: String,
        required: true,
       
    },
    vehicle_name: {
        type: String,
        required: true,
        
    },
    vehicle_model: {
        type:String,
        required:true
    },
    vehicle_number:{
        type:String
    },
    vehicle_year: {
        type:String
    },
    elements: {
        type:[]
    },
    vehicle_make: {
        type:String
    },
    vehicle_defects: {
        type:[]
    },
    attachment: {
        type:String
    }


})

const vehicle= mongoose.model('vehicle',vehicleSchema)

module.exports = vehicle  