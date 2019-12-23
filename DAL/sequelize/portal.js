module.exports = class Portal {
    constructor(model) {
        this.model = model
    }

    async createPortal(data) {
        let portal = await this.model.create(data)
        return portal
    }
    async getAllPortals() {
        let portals = await this.model.findAll()
        return portals;
    }
    async deletePortal(id) {
        let portal = await this.model.destroy({ where: { id: id } })
        return portal;
    }
    // async updatedPortal(id, data, fields = []) {
    //     let updatedportal = await this.model.update(
    //         data,
    //         {
    //             fields: fields.length ? field : null,
    //             where: { id }
    //         })
    //     return !!updatedportal[0]
    // }
}