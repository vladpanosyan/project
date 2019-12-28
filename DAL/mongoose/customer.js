module.exports = class Customer { 
    constructor(model) {
        this.model = model
    }

    async createData(data) {
        console.log(375656)
        let user = await this.model.create({name: 'Aghasik', phone: 20202020})// seq
        return user
    }
    async getAll() {
        let users = await this.model.find()
        return users;
    }
    async deleteUser(id) {
        let user = await this.model.destroy({where: {id: id}})//seq
        return user
    }
    async updatedUser(id, data, fields = []) {
        let updatedUser = await this.model.update(// seq
            data,
             {
                fields:fields.length ? field : null,
                where: {id}
            })
            return !!updatedUser[0]
        }
}