import Task from "../models/Task";
import catchAsync from "../utils/catchAsync"
  /**
     * @property {Function} Create_To_Do_Item For reating to do Item
     */

export const createTask = catchAsync(async (req,res,next)=>{
    let taskInfo= {};
    taskInfo.Title=req.body.Title;
    taskInfo.Description=req.body.Description;
    taskInfo.Priority=req.body.Priority;
    taskInfo.CreateDate=req.requestTime = new Date().toISOString();
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
      /**
     * @property {Function} Update_Todo_Item For Update to do Item
     */
  
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

              /**
     * @property {Function} Create_To_Do_Item API for Deleting Todo Item
     */
            
      export const deleteTask = catchAsync(async (req, res, next) => {
    
        let query = {_id:req.params.id}
    
        const articleInfo= await Task.deleteOne(query)
            res.send('Deleted Successfully')      
        
    })
    
        /**
     * @property {Function} Create_To_Do_Item API for Get All Todo Item
     */        //Get All controll function
    export const getAllTasks = catchAsync(async (req,res,next) => {
       
        const allTask = await Task.find({})
            res.send(allTask)
        })