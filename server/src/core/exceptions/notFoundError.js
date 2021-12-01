import CustomError from "./CustomError.js";
import { errorType } from "./errorType.js";

class NotFoundError extends CustomError{
    constructor(message) {
        super(message, errorType.NOT_FOUND);
    }
}

export default NotFoundError