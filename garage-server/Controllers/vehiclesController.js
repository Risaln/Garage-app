
const vehicle = require('../Models/vehicleSchema')

// const attachment = req.file.filename

exports.register = async (req,res) => {
    console.log("inside register function");
    const { vehicle_type,vehicle_model,vehicle_name,vehicle_number,vehicle_year,elements,attachment,vehicle_make,vehicle_defects}=req.body;        //destr
    console.log(`${vehicle_type} ${vehicle_model} ${vehicle_name} ${vehicle_number} ${vehicle_year} ${elements} ${vehicle_defects} ${vehicle_make} ${attachment}`);

    try {
        // const existingnumber = await vehicle.findOne({vehicle_number})
        // if (existingnumber) {
        //     res.status(406).json('Number is Already Exist..')
        // }
        // else {
            const newVehicle = new vehicle({
                vehicle_type,
                vehicle_name,
                vehicle_model,
                vehicle_number,
                vehicle_year,
                elements,
                vehicle_make,
                vehicle_defects,
                attachment,
            })
            await newVehicle.save()  //data is saved to mongodb
            //response sent to client
            res.status(200).json(newVehicle)
    }

    catch (err) {  
          console.error("Error in register API:", err);
          // Respond with an error message
          res.status(500).json("Internal Server Error");
    }
}