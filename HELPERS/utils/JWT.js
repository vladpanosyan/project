const JWT = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = class JWTFutures {
    constructor(payload = {}, options={}) {
        this.payload = payload;
        this.options = options; 
    }

    createToken() {
        return JWT.sign(this.payload, SECRET_KEY, this.options)
    }

    verifyToken(token) {
        return JWT.verify(token, SECRET_KEY);
    }

    createTokenForURL() {
        return JWT.sign(this.payload, SECRET_KEY).split('.')[2];
    }
}