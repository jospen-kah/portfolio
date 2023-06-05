const  Express = require ("express");
const  { createService, deleteService, getAllService, getOneService, updateService } = require("../controller/serviceController");


const router = Express.Router();

//get all Service
router.get("/",getAllService);


//get one Service
router.get("/:id", getOneService);

// create a Service
router.post("/", createService);

//update a Service
router.patch("/:id", updateService);

//delete a Service
router.delete("/:id",deleteService);

module.exports = router;