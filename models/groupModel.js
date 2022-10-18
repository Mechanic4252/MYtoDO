const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskTitle : {
        type: String,
        required: [true,"task must have name"]
    },
    Notes: String,
    URL: String,

    start : {
        type:Date
    },
    status :{
        type: Boolean
    }
});


const groupSchema = new mongoose.Schema({
    title : {
        type:String,
        required: [true,"Group must have a name"],
        unique: true
    },
    tasks :{
        type: [taskSchema]
    }
},{
    versionKey: false 
});

const group = mongoose.model('group',groupSchema);

module.exports = group;