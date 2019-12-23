
module.exports = class Nickname { 
    constructor(model) {
        this.model = model
    }

    async createData(data) {
        let nickname = await this.model.create(data)
        return nickname
    }
    // async getAll() {
    //     let nicknames = await this.model.findAll()
    //     return nicknames;
    // }

    async getAll() {
        console.log(Portals, 1919191)

        let nicknames = await this.model.findAll()
        return nicknames;
    }
    
    
    async deleteUser(id) {
        let nickname = await this.model.destroy({where: {id: id}})
        return nickname
    }

}