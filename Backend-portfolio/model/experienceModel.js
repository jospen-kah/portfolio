const mongoose = require ("mongoose");

const experienceSchema = new mongoose.Schema({
    category:{
        
        type: String,
        required:[true, "enter the name of the category"],
        unique :[true, "the category name should be unique"],

    },
    Skill:  {
        type: String,
        required:[true , "please enter the title" ],
        unique :[true, "please skill name should be unique "]

    },

    SkillLevel: {

        type: String,
        required: [true, "enter your skill level"]
    },



},{timestamps:true});

const Experience = mongoose.model ('Experience', experienceSchema)

module.exports= Experience;