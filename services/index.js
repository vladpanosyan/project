const UserService     = require('./userService')
const PortalService   = require('./portalService')
const NicknameService = require('./nicknameService')
const QuestionService = require('./questionService') 
const AnswerService   = require('./answerService')

console.log(QuestionService, 4455)

module.exports = {
    Users: UserService,
    Portals: PortalService,
    Nicknames: NicknameService,
    Questions: QuestionService,
    Answers: AnswerService
}
