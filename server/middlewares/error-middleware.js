import ApiError from "../exceptions/api-error.js"

const handleError =  function(err, req, res, next){
    console.log(err)
    if(err instanceof ApiError){
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }

    return res.status(500).json({message: "Undefined error"})
}

export default handleError