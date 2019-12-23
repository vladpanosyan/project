module.exports = class User { 
    constructor(model) {
        this.model = model
    }

    async createData(data) {
        let user = await this.model.create(data)
        return user
    }
    async getAll() {
        let users = await this.model.findAll()
        return users;
    }
    async deleteUser(id) {
        let user = await this.model.destroy({where: {id: id}})
        return user
    }
    async updatedUser(id, data, fields = []) {
        let updatedUser = await this.model.update(
            data,
             {
                fields:fields.length ? field : null,
                where: {id}
            })
            return !!updatedUser[0]
        }
}