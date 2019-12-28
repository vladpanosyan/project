const JOI = require('joi')

module.exports = function userValidation(userData) {
    const schema = JOI.object().keys({
        firstName: JOI.string().required(),
        lastName: JOI.string().required(),
        email: JOI.string().email().required(),
        password: JOI.string().regex(/^[a-zA-Z0-9]{6,30}$/),
        
    })
    return JOI.validate(userData, schema)
} 