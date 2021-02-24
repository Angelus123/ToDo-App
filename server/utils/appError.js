/**
 * 
 * Class to create Error Handling
 */
class AppError extends Error{
    
    /** 
     * 
     * @param {string} messsage -Error message 
     * @param {integer} statusCode -Status code
     * */

    constructor(message, statusCode){
    super(message)
    
    this.statusCode = statusCode
    this.status =`${statusCode}`.startsWith('4')? 'fail': 'error';
    this.isOperational = true
    Error.captureStackTrace(this, this.constructor)


    }
   
}
export default  AppError 
