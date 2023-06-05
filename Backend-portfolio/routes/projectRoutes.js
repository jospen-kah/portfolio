const  Express = require ("express");
const  { createProject, deleteProject, getAllProjects, getOneProject, updateProject } = require("../controller/projectController");


const router = Express.Router();

//get all projects
router.get("/",getAllProjects);


//get one project
router.get("/:id", getOneProject);

// create a project
router.post("/", createProject);

//update a project
router.patch("/:id", updateProject);

//delete a project
router.delete("/:id",deleteProject);

module.exports = router;