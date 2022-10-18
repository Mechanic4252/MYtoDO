const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const group = require("../models/groupModel");


//Send all tasks from specific group
exports.getAllTasks = catchAsync( async (req,res,next)=>{
    const ID  = req.param.id;
    const Groups = await group.find();
    res.status(200).render("index",{groups:Groups,visGroup:Groups[0].id})
    

})

//Add Task To a Group
exports.createTask = catchAsync(async (req,res,next)=>{

    let Group = await group.findById(req.params.Id);
    Group.tasks.push(req.body);
    await Group.save();
    
    const Groups = await group.find();
    res.status(200).redirect('/?gID=' + Group.id);
    

})

//delete task from group
exports.deleteTask = catchAsync(async (req,res,next)=>{
    const Group = await group.findById(req.params.g_Id);
    const task = await Group.tasks.id(req.params.t_Id).remove();
    await Group.save();
    const Groups=await group.find();
    res.status(200).redirect('/?gID=' + Group.id);
})

