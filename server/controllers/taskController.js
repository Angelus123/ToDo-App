import Task from "../models/Task";
import catchAsync from "../utils/catchAsync"

export const createTask = catchAsync(async (req,res,next)=>{
    let taskInfo= {};
    taskInfo.Title=req.body.Title;
    taskInfo.Description=req.body.Description;
    taskInfo.Priority=req.body.Priority;
    taskInfo.CreateDate=req.requestTime = new Date().toISOString();
    console.log(taskInfo)
    const newTask = await Task.create(taskInfo);
    res.status(201).json({
        status:"success",
        newTask
            })
        })

        export const getTask = catchAsync(async(req,res,next)=>{
            const taskInfo = await Task.findById(req.params.id)
                    res.status(200).json({
                       status:"success",
                       taskInfo
                    
                })
            })
    
    //Update controll function
    export const updateTask = catchAsync(async (req,res,next)=>{
        let taskInfo= {};
        taskInfo.title=req.body.Title;
        taskInfo.Body=req.body.Description;
        taskInfo.author=req.body.Priority;
        taskInfo. ModifiedDate=req.requestTime = new Date().toISOString();
        console.log(taskInfo)
        let query = {_id:req.params.id}
     
        const updateTask = await Task.updateOne(query, taskInfo)
                res.status(200).json({
                    status:"Updated succeed",  
                    taskInfo
                })  
            })
      //Delete controll function
      export const deleteTask = catchAsync(async (req, res, next) => {
    
        let query = {_id:req.params.id}
    
        const articleInfo= await Task.deleteOne(query)
            res.send('Deleted Successfully')      
        
    })
    
          //Get All controll function
    export const getAllTasks = catchAsync(async (req,res,next) => {
       
        const allTask = await Task.find({})
            res.send(allTask)
        })