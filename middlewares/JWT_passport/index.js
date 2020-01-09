const passport = require('passport');

const passport_strategy  = require('./passport')(passport);
const passport_middlware = require('./passport_mid')(passport);
const pasport_facebook   = require('./fc_login/index')(passport)

exports.passport_strategy = passport_strategy;
exports.authMiddleware = passport_middlware;
exports.facebookFutures = pasport_facebook;
