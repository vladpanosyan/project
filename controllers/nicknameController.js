class NicknameController {
    constructor(nicknameService) {
        this.nicknameService = nicknameService
    }
    //create 
    async createNickname(request, response, next) {
        const data = request.body;
        try {
            const nickname = await this.nicknameService.createNickname(data);
            response.json(nickname)
            
        } catch (error) {
            console.log(error.message, 155515157777);
        }
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


    // delete by id
    async deleteNickname(request, response, next) {
        console.log(request.params.id)
        const nicknameId = await this.nicknameService.deleteById(request.params.id)
        if (nicknameId) {
            response.status(200).end(`nicknameId in id - ${nicknameId.id} has deleted`)
        } else next('Nickname not found for deleting')
    }

    //is LoggedIn for click in cover component
    async isLogged(request, response) {
        const { nickToken, portalId } = request.body;
        const data = await this.nicknameService.isLogged(nickToken, portalId);
        if (data) {
            response.json(data);
        } else {
            response.status(200).send(false);
        }
    }

    // canactivate for guards
    async canactivate(request, response) {
        const { portalToken, nickToken } = request.body;
        const data = await this.nicknameService.canactivate(portalToken, nickToken);

        if (data) {
            response.json(data);
        } else if (data === null) {
            response.json('not found nickData')
        }else {
            response.status(200).send(false);
        }
    }
}

module.exports = NicknameController

// module.exports = async () => {
//     try {
//         const { Nicknames } = await require('./index')();
//         return {
//             nicknameController: new NicknameController(Nicknames),
//         }
//     } catch (error) {
//     console.log(error.message, 474747474)
//         // if (error.message === "db connect error") {
//         //     throw new Error('db connect error')
//         // }
//     }
// }