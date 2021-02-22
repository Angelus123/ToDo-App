
import express, { Router } from "express";
import * as userControl from "../controllers/userController";
import * as AuthController from "../controllers/AuthController"

const userRouter = express.Router()
userRouter.post('/login', AuthController.login)
userRouter.post('/signup', AuthController.signup)

userRouter.route("/")
                   
                   .post(userControl.createUser)
                   .get(userControl.getAlluser)  

userRouter.route('/:id')
                   .delete(userControl.deleteUser)
                   .patch(userControl.updateUser)
                   .get(userControl.getUser)
export default userRouter;
