const JWT = require('./../HELPERS/utils/JWT');

class Nicknames {
    constructor(nicknameDal) {
        this.nicknameDal = nicknameDal
    }
    async createNickname(data) { // ste hnaravora token.verify hamar vercvi try catch mej, ete frontic hankarc sxal nicktoken ga
        data.image = process.env.NICK_USER_DEFAULT_IMAGE;
        let nickname = await this.nicknameDal.createData(data);

        if (nickname) {
            if (data.nickToken) {
                const payload = new JWT().verifyToken(data.nickToken);
                payload.datas[nickname.portalId] = nickname.id;
                const newToken = new JWT(payload).createToken();
                nickname.token = newToken;
                return nickname;
            } else {
                const { id, name } = nickname;
                const datas = {};
                datas[nickname['portalId']] = id;
                console.log(datas, 333111);
                let payload = { id, name, datas };
                const tokenObj = new JWT(payload);
                const token = tokenObj.createToken();
                nickname.token = token;
                return nickname;
            }
        } else {
            errorLog('nickname not creted');
        }
    }
    async getAllNicknames() {
        let nickname = await this.nicknameDal.getAll();
        if (nickname) {
            return nickname;
        } else {
            // errorLog('nickname not foud')// es error@ catch e linum routneri mej
            throw new Error('USER NOT EXIST')
        }
    }
    async deleteById(id) {
        let deletedNickname = await this.nicknameDal.deleteUser(id);
        if (deletedNickname) {
            return deletedNickname;
        } else {
            errorLog('nickname not found for deleting')
        }
    }

    // check if subscriber anytime accessed to any portal
    async isLogged(token, portalId) {
        try {
            const tokenObj = new JWT();
            const nickObj = tokenObj.verifyToken(token);
            const currentNicId = nickObj.datas[portalId];
            if ( !currentNicId ) {
                return {
                    currentNicId: false
                }
            } else {
                const nickData = await this.nicknameDal.getNickData(currentNicId);
                // console.log
                nickData.currentNicId = !!currentNicId;
                return nickData;
            }
        } catch (error) {
            console.log(error.message, 44444445);
            return;
        }
    }
    // used for nick guard
    async canactivate(portalToken, nickToken) {
        try {
            const payload = new JWT().verifyToken(nickToken);
            const portalId = await this.nicknameDal.getPortalId(portalToken);
            const nickId = payload.datas[portalId.id];
            const nickData = await this.nicknameDal.getNickData1(nickId, portalId.id);
            return nickData;
        } catch (error) {
            console.log(error.message, 555555);
            return;
        }
    }
}

module.exports = Nicknames