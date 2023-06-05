const  Express = require ("express");
const  { createExperience, deleteExperience, getAllExperience, getOneExperience, updateExperience } = require("../controller/experienceController");


const router = Express.Router();

//get all Experience
router.get("/",getAllExperience);


//get one Experience
router.get("/:id", getOneExperience);

// create a Experience
router.post("/", createExperience);

//update a Experience
router.patch("/:id", updateExperience);

//delete a Experience
router.delete("/:id",deleteExperience);

module.exports = router;