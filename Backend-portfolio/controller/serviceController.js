const mongoose = require ('mongoose')
const Service = require ("../model/ServicesModel");


//funcions to get all the service in the database
async function getAllService(req, res, next){

    const service = await Service.find({}).sort({ createdAt: -1})
    
    return next(
        res.status(200).json(service)
        
    )
}

//function to create a document to the database
async function createService(req, res, next){
    const serviceData= req.body;

    const newService = await Service.create(serviceData);

    return next(
        res.status(200).json({
            Status :"OK",
            message : "service succefully added!"
        })
       
    )
}

//functions to get one document from the database
async function getOneService(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const service = await Service.findById({_id : id })

    if(!service){
        return next(
            res.status(404).json({
                message: "Service  Not Found"
            })
        )
    }

    return next(
        res.status(200).json (service)
    )
}


//function to update a service

async function updateService(req, res,next){
    const {id} = req.params ;

    const update = req.body

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const service = await Service.findByIdAndUpdate({_id: id}, {
        ...req.body, update
    })
    if(!service){
        return next(
            res.status(404).json({
                message: "service Not Found"
            })
        )
    }

    return next(
        res.status(200).json(service)
    )
}

//function to delete a service from  a database
async function deleteService(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const service = await Service.findByIdAndDelete({_id: id })

if(!service){
        return next(
            res.status(404).json({
                message: "service Not Found"
            })
        )
    }

    return next(
        res.status(200).json({
            Status :"OK",
            message : "Service succefully deleted!"
        })
       
    )
}

module.exports = { getAllService, getOneService, createService, updateService, deleteService }

