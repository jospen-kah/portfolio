const mongoose = require("mongoose");
const Project = require("../model/projectModel");

//function to get all projects in the database
async function  getAllProjects(req, res, next){

    try {
        const projects = await Project.find({}).sort({ createdAt: -1})

        return next(
            res.status(200).json(projects)
            
        )
    } catch (error) {
        return next(
        res.status(400).json({
            message : error
        }))
    }
    
}

//function to create a document to the database
async function createProject(req, res, next){
    const ProjectData= req.body;
    try {
        const newProject = await Project.create(ProjectData);

        return next(
            res.status(200).json({
                Status :"OK",
                message : "Project succefully added!"
            })
        
        )
    } catch (error) {
        return next(
            res.status(400).json({
                message : error
            }))
    }
}


//functions to get one document from the database
async function getOneProject(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const project = await Project.findById({_id : id })



    if(!project){
        return next(
            res.status(404).json({
                message: "Project Not Found"
            })
        )
    }

    return next(
        res.status(200).json (project)
    )
}

//function to update a project

async function updateProject(req, res,next){
    const {id} = req.params ;

    const update = req.body

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const project = await Project.findByIdAndUpdate({_id: id}, {
        ...req.body, update
    })
    if(!project){
        return next(
            res.status(404).json({
                message: "Project Not Found"
            })
        )
    }

    return next(
        res.status(200).json(project)
    )
}


//function to delete a project from  a database
async function deleteProject(req, res, next){
    const {id} = req.params ;

    if( !mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                message: "Invalid id!"
            })
        ) 
    }

    const project = await Project.findByIdAndDelete({_id: id })

if(!project){
        return next(
            res.status(404).json({
                message: "Project Not Found"
            })
        )
    }

    return next(
        res.status(200).json({
            Status :"OK",
            message : "Project succefully deleted!"
        })
       
    )
}

module.exports = { getAllProjects, getOneProject, createProject, updateProject, deleteProject }