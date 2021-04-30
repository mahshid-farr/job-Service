const mongoose = require('mongoose')

mongoose.model("Job", {

    title:{type: String, require: false},
    candidates:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref:"Candidate",
            require:false
        }
    ]
});