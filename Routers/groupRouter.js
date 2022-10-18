const express = require("express");
const groupController = require("./../controllers/groupControllers");
const taskController = require("./../controllers/taskControllers")

const router = express.Router();

router
    .route("/")
    .post(groupController.createGroup)
    .get(groupController.getGroups);

router
    .route("/:Id")
    .get(taskController.getAllTasks)
    .post(taskController.createTask)

router.route("/deletegroup/:Id").post(groupController.deleteGroup);

router.route("/deleteTask/:g_Id/:t_Id").post(taskController.deleteTask);



module.exports = router;
