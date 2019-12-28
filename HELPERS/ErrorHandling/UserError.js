exports.UserExistsError = class UserError extends Error {
    constructor(message, cause='') {
        super(message)
        this.cause = cause;
        this.name = 'User Not Found'
    }
}