import CustomError from "../../core/exceptions/customError.js";
import { errorType } from "../../core/exceptions/errorType.js";

async function errorHandling (err, req, res, next) {
    let status = 500

    if(err instanceof CustomError){
        if (err.errorType == errorType.NOT_FOUND) {
            status = 404
        } else if (err.errorType == errorType.INVALID_ARGS) {
            status = 400
        }
    }

    res.status(status)
    res.json({error: err.message})

}

export { errorHandling }