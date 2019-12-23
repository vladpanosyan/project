const UserService     = require('./userService')
const PortalService   = require('./portalService')
const NicknameService = require('./nicknameService')

console.log(NicknameService, 4455)

module.exports = {
    Users: UserService,
    Portals: PortalService,
    Nicknames: NicknameService
}
