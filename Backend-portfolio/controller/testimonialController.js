const mongoose = require ('mongoose')
const Testimonial = require ("../model/TestimonialModel");


//funcions to get all the testimonials in the database
async function getAllTestimonial(req, res, next){
    const testimonial = await Testimonial.find({}).sort({ createdAt: -1})
    
    return next(
        res.status(200).json(testimonial)
        
    )
}

//function to create a testimonial to the database
async function createTestimonial(req, res, next){
    const testimonialData= req.body;

    const newTestimonial = await Testimonial.create(testimonialData);

    return next(
        res.status(200).json({
            Status :"OK",
            message : "testimonial succefully added!"
        })
       
    )
}

//functions to get one testimonial from the database
async function getOneTestimonial(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const testimonial = await Testimonial.findById({_id : id })

    if(!testimonial){
        return next(
            res.status(404).json({
                message: "Testimonial  Not Found"
            })
        )
    }

    return next(
        res.status(200).json (testimonial)
    )
}


//function to update a testimonial

async function updateTestimonial(req, res,next){
    const {id} = req.params ;

    const update = req.body

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const testimonial = await Testimonial.findByIdAndUpdate({_id: id}, {
        ...req.body, update
    })
    if(!testimonial){
        return next(
            res.status(404).json({
                message: "Testimonial Not Found"
            })
        )
    }

    return next(
        res.status(200).json(testimonial)
    )
}

//function to delete an testimonial from  a database
async function deleteTestimonial(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const testimonial = await Testimonial.findByIdAndDelete({_id: id })

if(!testimonial){
        return next(
            res.status(404).json({
                message: "Testimonial Not Found"
            })
        )
    }

    return next(
        res.status(200).json({
            Status :"OK",
            message : "Testimonial succefully deleted!"
        })
       
    )
}

module.exports = { getAllTestimonial, getOneTestimonial, createTestimonial, updateTestimonial, deleteTestimonial }

