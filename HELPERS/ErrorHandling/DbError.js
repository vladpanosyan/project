exports.DbError = class DbError extends Error {
    constructor(message, cause) {
        super(message)
        this.cause = cause;
        this.name = 'dbError'
    }
}
exports.TableCreatError = class TableCreatError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause
        this.name = 'table_create_error'
    }
}