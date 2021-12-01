class CustomError extends Error {
    constructor(message, errorType) {
        super(message);

        this.errorType = errorType
    }
}

export default CustomError