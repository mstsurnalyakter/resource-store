const errorResponse = (res,{statusCode=500,message='Internal Server Error.'})=>{
    res.status(statusCode).json({
        success:false,
        message
    })
}
const successResponse = (res,{statusCode=200,message='Success',payload={}})=>{
    res.status(statusCode).json({
        success:false,
        message,
        payload
    })
}


module.exports = {

    errorResponse,
    successResponse
}