import express from "express"
import bodyParser from "body-parser"
import UserRouter from "./routes/userRouter"
import taskRoute from "./routes/taskRouter"

import * as globalErrorHandling from "./controllers/ErrorController"
import AppError  from "./utils/appError"

const app = express();
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{res.status(200).send({
    status:200, 
    message:'welcome to todoApp',
})
})
app.use((req, res, next) => {
req.requestTime = new Date().toISOString();
// console.log(req.headers)
next()
})
// console.log(app.get('env')

app.use('/api/v1/user',UserRouter)
app.use('/api/v1/task',taskRoute)

app.all('*', (req,res,next) => {
 
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

app.use(globalErrorHandling. globalErrorHandling)
export default app;