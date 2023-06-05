const  mongoose  = require("mongoose");

const TestimonialShema = new mongoose.Schema({
    clientname:{
            type: String,
            required:[true, "please enter the client name"]
    },
    clientImage:{
        type: String,
        required: [true, "the client should have an image"]
    },
    testimonialMessage:{
        type: String,
        required:[true, "enter the testimonial message"]
    }
},{timestamps: true})

const Testimonial = mongoose.model('testimonial', TestimonialShema)
module.exports = Testimonial;


