import CustomError from "./CustomError.js";
import {errorType} from "./errorType.js";

class InvalidArgsError extends CustomError{
    constructor(mensaje) {
        super(mensaje, errorType.INVALID_ARGS);
    }
}

export default InvalidArgsError