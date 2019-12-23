
module.exports = class Nickname { 
    constructor(model, models) {
        this.model = model,
        this.models = models
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

        let nicknames = await this.model.findAll({
            include: [{
                model: this.models.Portals,
                include: [{
                    model: this.models.Users,
                    where: {
                        firstName: 'bbbb' 
                    }
                }]
            }]
        })
        return nicknames;
    }
    
    
    async deleteUser(id) {
        let nickname = await this.model.destroy({where: {id: id}})
        return nickname
    }

}