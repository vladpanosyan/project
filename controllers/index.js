
// let singleServicesInstance = async() => {
//     let called = false;
//     let SERVICES = {};

//     function create() {
//         called = true
//         SERVICES  = await require('../app_init/dal_service_init')();
//         return SERVICES
//     }
//     return function() {
//         if(!called) {
//             create()
//         }
//         return SERVICES
//     }
// }

// module.exports = async() => {
//     singleServicesInstance()
// }
const userController       = require('./userController');
const portalController     = require('./portalController');
const questionController   = require('./questionController');
const nicknameController   = require('./nicknameController');
const answerController     = require('./answerController');
const nick_lickeController = require('./nick_likeController')

module.exports = {
    Users: userController,
    Portals: portalController,
    Questions: questionController,
    Nicknames: nicknameController,
    Answers: answerController,
    nick_lickeController
}