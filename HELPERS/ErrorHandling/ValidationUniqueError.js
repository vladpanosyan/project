module.exports  = class ValidationUniqueError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = 'unique_validate_error'
    }
}