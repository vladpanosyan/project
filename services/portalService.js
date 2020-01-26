const URLToken = require('./../HELPERS/utils/JWT')
const AppError = require ('./../HELPERS/ErrorHandling/AppError')

class Portals {
    constructor(portalDal) {
        this.portalDal = portalDal
    }
    async createPortal(data) {
        const token = new URLToken({id: data.userId, start: data.start}).createTokenForURL();
        data.token = token;
        let portal = await this.portalDal.createPortal(data)
        if (portal) {
            return portal
        } else {
            errorLog('portal not creted')
        } 
    }

    async startPortal(id, token) {
        const isStarted = await this.portalDal.startPortal(id, token);
        if (isStarted) {
            return isStarted;
        } else throw new AppError('action failed ,see cause', 'event has been started or ended or wrong credentials')
    }

    async getAll() {
        let portal = await this.portalDal.getAll();
        if (portal) {
            return portal
        } else {
            // errorLog('portal not foud')// es error@ catch e linum routneri mej
            throw new Error('PORTAL NOT EXIST')
        } 
    }

    async getUserPortals(userId) {
        let portal = await this.portalDal.getUserPortals(userId);
        if (portal) {
            return portal
        } else {
            throw new Error('PORTAL NOT EXIST')
        } 
    }

    async getActivePortal() {
        const activePortal = await this.portalDal.getActivePortal();
        if(activePortal) {
            return activePortal;
        } 
        return {
            message: 'Active Portal not exist'
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

    // 
    async checkToken(data) {
        const isValid = await this.portalDal.checkToken(data);
        if (isValid) {
            return {
                ok: 'exist',
                textContent: 'Right Token'
            };
        } else {
            return {
                ok: null,
                textContent: 'Wrong Token'
            }
        }
    }
    //
    async getPortalStatus(token) {
        let portalStatus = await this.portalDal.getPortalStatus(token);
        if (portalStatus) {
            return portalStatus;
        }
        throw new Error("No Portal Portal POrtal .........");
    }
}

module.exports = Portals