//load express
const express = require('express')
const app = express()

const port = process.env.PORT || 8100;

//load body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//load mongoose
const mongoose = require('mongoose')

//load models
require('./model/job')
const Job = mongoose.model("Job")

//database connection
mongoose.connect("mongodb+srv://AcornPurpleSquirrel:c5g83kCRgzjBKqNE@acorn.bzwjn.mongodb.net/jobsService", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("Database is connected!")
});

//create function for job
app.post('/addJob', (req, res) => {

    var job = new Job(req.body)

    job.save().then(() => {
      console.log("One new job is created successfully");
    }).catch((err) => {
      if (err) {
        throw err
      }
    })
    res.send("One new job is created successfully")
  });

 //read function to get all jobs
app.get("/getAllJobs", (req, res)=>{
  Job.find().then((jobs)=>{
    res.json(jobs)
  }).catch((err)=>{
   if(err){
     throw err
   }
  })
});

app.listen(8100, () => {
    console.log("Server started on: " + port)
  });