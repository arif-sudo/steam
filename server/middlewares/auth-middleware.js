import ApiError from "../exceptions/api-error";

const handleAuth = function(err, req, res, next){
    try{
        const authorizationHeader = req.headers.authorization;
    }catch(err){    
        return next(ApiError.UnauthorizedError())
    }  
}

export default handleAuth;