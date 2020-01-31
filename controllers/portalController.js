    class PortalController {
    constructor(portalService) {
        this.portalService = portalService
    }
    // find
    async getAll(request, response) {
        try{
            console.log(32323232323, 'in controller PORTAL')
            let portals = await this.portalService.getAll()
            response.json(portals);
            // io.emit('showPortals')
        }
        catch(e) {
            console.log(e.message, 7777777) /// amena lav error handlingi tex@
        }
    }

    // get specificc user portals
    async getUserPortals(request, response) {
        try{
            const { userId } = request.body;
            let portals = await this.portalService.getUserPortals(userId);
            response.json(portals);
        }
        catch(e) {
            console.log(e.message, 2525252525252525) 
        } 
    }

    //create 
    async createPortal(request, response) {
        const io = request.app.get("io");       
        const portalData = request.body;
        const portal = await this.portalService.createPortal(portalData);
        response.json(portal);
        io.emit('showPortals')
    }

    // delete by id
    async deletePortal(request, response) {
        console.log(request.params.id)
        const portalId = await this.portalService.deleteById(request.params.id)
        if (portalId) {
            response.status(200).end(`portalId in id - ${portalId.id} has deleted`)
        } else('User not found for deleting')
    }

    // start
    async startPortal(request, response) {
        try {
            const token = request.params.token;
            const portalId = request.body.id;
            const isStarted = await this.portalService.startPortal(portalId, token);
            response.json({success: 'ok', isStarted})
            
        } catch (error) {
            response.status(500).send({error: error.message})
        }
    }
    // active
    async getActivePortal(request, response) {
        try {
            const activePortal = await this.portalService.getActivePortal();
            response.json(activePortal)
        } catch (error) {
            response.status(500).json({error: error.message})
        }
    }

    // check subscribers permision 
    async checkToken(request, response) {
        try {
            const data = request.body;
            const isValid = await this.portalService.checkToken(data);
            response.json(isValid)
            
        } catch (error) {
            response.status(501).json({error: error.message})
        }
    } 
    // get portal status for guards
    async getPortalStatus(request, response, next) {
        const { token } = request.body;
        try {
            const status = await this.portalService.getPortalStatus(token);
            response.json(status);

        } catch (error) {
            next(error)
        }
    }

    exp(request, response) {
        response.json({experemet: "ok"})
    }
}

module.exports = PortalController
