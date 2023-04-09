class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []){
        super(message);
        this.status = status;
        this.errors = errors
    }

    static UnauthorizedError(){
        return new ApiError(401, "User did not authorized")
    }

    static BadRequest(){
        return new ApiError(400, message, errors)
    }
}

export default ApiError