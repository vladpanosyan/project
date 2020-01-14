const JWT = require('./../HELPERS/utils/JWT');

class Nicknames {
    constructor(nicknameDal) {
        this.nicknameDal = nicknameDal
    }
    async createNickname(data) {
        data.image = process.env.NICK_USER_DEFAULT_IMAGE;
        let nickname = await this.nicknameDal.createData(data);
        if (nickname) {
            const { id, name } = nickname;
            let payload = {id, name};
            const tokenObj = new JWT(payload);
            const token = tokenObj.createToken();
            nickname.token = token;
            return nickname;
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
        if(deletedNickname) {
            return deletedNickname;
        } else {
            errorLog('nickname not found for deleting')
        }
    }

    async isLogged(token) {
        try {
            const tokenObj = new JWT();
            const nickObj = tokenObj.verifyToken(token);
            if (nickObj) {
                const nickData = await this.nicknameDal.getNickData(nickObj.id);
                console.log(nickObj, 74010006)
                return nickData;
            };
        } catch (error) {
            console.log(error.message, 4444444);
            return;
        }
    }
}

module.exports = Nicknames