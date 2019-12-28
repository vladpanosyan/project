    class PortalController {
    constructor(portalService) {
        this.portalService = portalService
    }
    // find
    async showResult(request, response) {
        try{
            console.log(32323232323, 'in controller PORTAL')
            let portals = await this.portalService.getAllPortals()
            console.log(portals, 4444444)
            response.json({ portals })
        }
        catch(e) {
            console.log(e.message, 15551515151515) /// amena lav error handlingi tex@
        }
    }

    //create 
    async createPortal(request, response) {
        const portalId = await this.portalService.createUser()
        response.json(portalId)
    }

    // delete by id
    async deletePortal(request, response) {
        console.log(request.params.id)
        const portalId = await this.portalService.deleteById(request.params.id)
        if (portalId) {
            response.status(200).end(`portalId in id - ${portalId.id} has deleted`)
        } els('User not found for deleting')
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