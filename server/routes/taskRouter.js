import express from "express";
import * as taskControl from "../controllers/taskController";

import * as authControl from "../controllers/AuthController"


const taskRoute = express.Router()

taskRoute.route("/")
                   .post(taskControl.createTask)
                   .get(authControl.protect, taskControl.getAllTasks)
                

taskRoute.route('/:id')
                   .delete(taskControl.deleteTask)
                   .patch(taskControl.updateTask)
                   .get(taskControl.getTask)


export default taskRoute;