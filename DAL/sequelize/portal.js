module.exports = class Portal {
    constructor(model) {
        this.model = model
    }

    async createPortal(data) {
        let portal = await this.model.create(data)
        return portal
    }

    async startPortal(id, token) {
        let portalStarted = await this.model.update(
            {isStarted: 1},
            {where: {id, token}}
            )
            console.log(portalStarted, 523);
        if (portalStarted[0]) return true;
        return;
    }

    async getAll() {
        let portals = await this.model.findAll()
        return portals;
    }

    async getActivePortal() {
        const activePortal = await this.model.findAll({
            where: {
                isStarted: 1,
                isFinished: 0
            }
        });
        // console.log(t, 636363)
        return activePortal[0];
    }

    async checkToken(token) {
        const isValid = await this.model.findAll({
            where: {
                token
            }
        });
        console.log(isValid, 7777777)
        if (isValid.length) {
            return true;
        }
        return;
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