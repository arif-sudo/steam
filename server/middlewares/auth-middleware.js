import ApiError from "../exceptions/api-error.js";
import tokenService from "../service/token-service.js";

export default function(err, req, res, next){
    try{
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader){
            throw ApiError.UnauthorizedError()
        }
        const accessToken = authorizationHeader.split(" ")[1]
        if (!accessToken){
            return next(ApiError.UnauthorizedError()) 
        }

        const userData = tokenService.validateAccessToken(accessToken);
        if (!userData){
            return next(ApiError.UnauthorizedError())
        }

        req.user = userData;
        next()
    }catch(err){    
        return next(ApiError.UnauthorizedError())
    }  
}   