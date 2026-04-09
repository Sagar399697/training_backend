class ApiError extends Error {
    constructor(
        statuscode,
        message = "Didn't find what you are looking for",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statuscode = statuscode
        this.errors = errors
        this.success = false
        this.data = null

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export default ApiError;