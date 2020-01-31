const JOI = require('joi')

exports.userValidation = function (userData) {
    const schema = JOI.object().keys({
        firstName: JOI.string().required(),
        lastName: JOI.string().required(),
        email: JOI.string().email().required(),
        password: JOI.string().regex(/^[a-zA-Z0-9]{6,30}$/),

    })
    return JOI.validate(userData, schema)
}

exports.userLoginValidation = function (loginData) {
    const schema = JOI.object().keys({
        username: JOI.string().email().required(),
        password: JOI.string().regex(/^[a-zA-Z0-9]{6,30}$/),

    })
    return JOI.validate(loginData, schema);
}

exports.userSendMailValidation = (mailData) => {
    const schema = JOI.array().items(JOI.string().email().required());
    return JOI.validate(mailData, schema);
}