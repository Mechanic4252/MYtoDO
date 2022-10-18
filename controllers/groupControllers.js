const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");
const group = require("../models/groupModel");

exports.createGroup =catchAsync(async (req,res,next) =>{

    const name = req.body.title;
    

    const Group = await group.create({
        title:name
    })
    
    const Groups = await group.find();

    res.status(200).redirect('/?gID=' + Group.id);
    
});

exports.getGroups = catchAsync(async (req,res,next)=>{
    const Groups = await group.find();
    const GroupID = req.query.gID || Groups[0].id;
    
    res.status(200).render("index",{groups:Groups,visGroup:GroupID});
})

exports.deleteGroup = catchAsync(async (req,res,next)=>{
    const Group = await group.findByIdAndDelete(req.params.Id);

    if(!Group){
        return next(new AppError("No group with this title",404));
    }

    res.status(201).redirect("/");
    

})