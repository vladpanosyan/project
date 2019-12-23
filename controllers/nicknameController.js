class NicknameController {
    constructor(nicknameService) {
        this.nicknameService = nicknameService
    }
    // find
    async showResult(request, response, next) {
        
        try{
            console.log(32323232323, 'in controller NickNmame')
            let nicknames = await this.nicknameService.getAllNicknames()
            response.json({ nicknames: nicknames })
        }
        catch(e) {
            console.log(e.message, 15551515151515) /// amena lav error handlingi tex@
        }
    }

    //create 
    async createNickname(request, response, next) {
        const nicknameId = await this.nicknameService.createNickname()
        response.json(nicknameId)
    }

    // delete by id
    async deleteNickname(request, response, next) {
        console.log(request.params.id)
        const nicknameId = await this.nicknameService.deleteById(request.params.id)
        if (nicknameId) {
            response.status(200).end(`nicknameId in id - ${nicknameId.id} has deleted`)
        } else next('Nickname not found for deleting')
    }
}

module.exports = async () => {
    try {
        const { Nicknames } = await require('../app_init/dal_service_init')();
        return {
            nicknameController: new NicknameController(Nicknames),
        }
    } catch (error) {
console.log(error, 474747474)
        // if (error.message === "db connect error") {
        //     throw new Error('db connect error')
        // }
    }
}