    class PortalController {
    constructor(portalService) {
        this.portalService = portalService
    }
    // find
    async getAll(request, response) {
        try{
            console.log(32323232323, 'in controller PORTAL')
            let portals = await this.portalService.getAll()
            response.json(portals)
        }
        catch(e) {
            console.log(e.message, 15551515151515) /// amena lav error handlingi tex@
        }
    }

    //create 
    async createPortal(request, response) {
        const portalData = request.body;
        const portal = await this.portalService.createPortal(portalData)
        response.json(portal)
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
            const { token } = request.body;
            const isValid = await this.portalService.checkToken(token);
            response.json(isValid)
            
        } catch (error) {
            response.status(501).json({error: error.message})
        }
    } 
    // // updete
    // async updatePortal(request, response) {
    //     const Id = request.params.id;
    //     const newData = request.body;
    //     let newUser = await this.portalService.updateUserById(Id, newData)
    //     if (newUser) {
    //         response.status(200).end(`portalId in Id - ${Id} has updated. New data is ${JSON.stringify(newData)}`)
    //     } els(`User not found for Updateing`)
    // }

}

module.exports = PortalController
// module.exports = async () => {
//     try {
//         const { Portals } = await require('./index')();
//         return {
//             portalController: new PortalController(Portals),
//         }
//     } catch (error) {
// console.log(error, 210989)
//         // if (error.message === "db connect error") {
//         //     throw new Error('db connect error')
//         // }
//     }
// }