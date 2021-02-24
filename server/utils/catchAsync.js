/**
     * @property {Function} catchAsync  Erro handling function to catch all error from Controller
     */
const catchAsync = fn => {
    return(req,res,next)=>{
    fn(req, res, next).catch(err => next(err))
}}
export default catchAsync