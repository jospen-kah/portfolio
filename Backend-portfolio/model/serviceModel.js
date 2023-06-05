const mongoose = require ("mongoose");


const project = new mongoose.Schema({
    title : {
        type : String,
        required: [true, "please give the title"],
        unique : [true, "please project name should be unique"]
    },
    githubLink : {
        type : String,
        required: [true, "a project must have a github link"]
    },
    livelLink: {
        type : String,

    },
    images : {
        type : String ,
        required : [true, "project must have at least one image"]
    }
},{timestamps: true}) ;

const Project = mongoose.model('Project', project);

module.exports= Project;