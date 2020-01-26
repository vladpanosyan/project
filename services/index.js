const UserService      = require('./userService')
const PortalService    = require('./portalService')
const NicknameService  = require('./nicknameService')
const QuestionService  = require('./questionService') 
const AnswerService    = require('./answerService')
const Nick_likeService = require('./nick_likeService')

module.exports = {
    Users: UserService,
    Portals: PortalService,
    Nicknames: NicknameService,
    Questions: QuestionService,
    Answers: AnswerService,
    Nick_likes: Nick_likeService
}
