const express = require('express');
const mongoose = require("mongoose");
const projectRoute = require('./routes/projectRoute');
const serviceRoute = require('./routes/serviceRoute');
const testimonialRoute = require('./routes/testimonialRoute');
const experienceRoute = require('./routes/experienceRoute');
require('dotenv').config({path: './variables/.env'});
const cors = require("cors")

const app =express();

const PORT = process.env.PORT;
const DBURL = process.env.DBURL;

mongoose.connect(DBURL)
.then(()=>{
    app.listen(PORT, function(){
        console.log ("listening on port",PORT)
    })
    console.log("Successfully connected to the Database")
})
.catch((error)=>{
    console.log("Database Error", error)}
)

// middleware
app.use(express.json());
app.use( (req, res, next) =>{
    console.log(req.path, req.method);
    next();
});
app.use(cors({
    "origin" : ["http://127.0.0.1:1000"],
    "methods" : ["GET", "POST", "DELETE", "PATCH"]
}));


//defining route
app.use("/projects", projectRoute);
app.use("/services", serviceRoute);
app.use("/experiences", experienceRoute)
app.use("/testimonials", testimonialRoute);
app.use("/", (req, res)=>{
    return (
        res.status(200).json({
            message: "Root URL, Please navigate to a valid Endpoint"
        })
    )
})
