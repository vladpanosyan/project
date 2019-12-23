class Portals {
    constructor(portalDal) {
        this.portalDal = portalDal
    }
    async createPortal(data) {
        let portal = await this.portalDal.createData(data)
        if (portal) {
            return portal
        } else {
            errorLog('portal not creted')
        } 
    }
    async getAllPortals() {
        let portal = await this.portalDal.getAllPortals()
        if (portal) {
            return portal
        } else {
            // errorLog('portal not foud')// es error@ catch e linum routneri mej
            throw new Error('PORTAL NOT EXIST')
        } 
    }
    async deleteById(id) {
        let deletedPortal = await this.portalDal.deletePortal(id)
        if(deletedPortal) {
            return deletedPortal
        } else {
            errorLog('portal not found for deleting')
        }
    }
    // async updateUserById(id, data) {
    //     let updatedUser = await this.portalDal.updatedUser(id, data)
    //     if(updatedUser) {
    //         return updatedUser
    //     } else errorLog('portal not found for Updateing')
    // }
}

module.exports = Portals