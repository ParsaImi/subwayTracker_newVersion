    exports.errorController = (error , req , res , next) => {
    error.statusCode = error.statusCode || 500
    error.status = error.status || "error"

    return res.status(error.statusCode).json({
        statusCode : error.statusCode,
        error : error,
        status : error.status,
        message : error.message,
})
}

