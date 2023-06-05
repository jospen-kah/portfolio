const  Express = require ("express");
const  { createTestimonial, deleteTestimonial, getAllTestimonial, getOneTestimonial, updateTestimonial } = require("../controller/testimonialController");


const router = Express.Router();

//get all Testimonial
router.get("/",getAllTestimonial);


//get one Testimonial
router.get("/:id", getOneTestimonial);

// create a Testimonial
router.post("/", createTestimonial);

//update a Testimonial
router.patch("/:id", updateTestimonial);

//delete a Testimonial
router.delete("/:id",deleteTestimonial);

module.exports = router;