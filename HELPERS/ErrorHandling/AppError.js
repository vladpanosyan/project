class AppError extends Error{
    constructor(message, cause) {
        super(message)
        this.cause = cause;
        this.name = 'AppError';
        this.stack = cause.stack;
        
    }
}

// function DetectError(error) {
//     switch (error.name) {
//         case 'SequelizeConnectionRefusedError': 
//         throw new AppError('Connection error, check DB connection', error)
//             break;
//         case 'SequelizeUniqueConstraintError': 
//         throw new AppError(error.errors[0].message, error)
        
//         default:
//             break;
//     }
   
// }

module.exports = AppError