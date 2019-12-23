class Nicknames {
    constructor(nicknameDal) {
        this.nicknameDal = nicknameDal
    }
    async createNickname(data) {
        let nickname = await this.nicknameDal.createData({email: 'ghgh@mail.ru', firstName: 'vlod', lastName: 'ccc', img: "kkkkkk"})
        if (nickname) {
            return nickname
        } else {
            errorLog('nickname not creted')
        } 
    }
    async getAllNicknames() {
        let nickname = await this.nicknameDal.getAll()
        if (nickname) {
            return nickname
        } else {
            // errorLog('nickname not foud')// es error@ catch e linum routneri mej
            throw new Error('USER NOT EXIST')
        } 
    }
    async deleteById(id) {
        let deletedNickname = await this.nicknameDal.deleteUser(id)
        if(deletedNickname) {
            return deletedNickname
        } else {
            errorLog('nickname not found for deleting')
        }
    }
}

module.exports = Nicknames