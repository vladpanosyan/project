
class UserController {
    constructor(userService) {
        this.userService = userService
    }
    // find
    async showResult(request, response, next) {
  console.log(11111111)
        
        try{
            console.log(32323232323, 'in controller')
            let users = await this.userService.getAllUsers()
            response.json({ users: users })
        }
        catch(e) {
            console.log(e.message, 15551515151515) /// amena lav error handlingi tex@
        }
    }

    //create 
    async createUser(request, response, next) {
        const userId = await this.userService.createUser()
        response.json(userId)
    }

    // delete by id
    async deleteUser(request, response, next) {
        console.log(request.params.id)
        const userId = await this.userService.deleteById(request.params.id)
        if (userId) {
            response.status(200).end(`userId in id - ${userId.id} has deleted`)
        } else next('User not found for deleting')
    }
    // updete
    async updateUser(request, response, next) {
        const Id = request.params.id;
        const newData = request.body;
        let newUser = await this.userService.updateUserById(Id, newData)
        if (newUser) {
            response.status(200).end(`userId in Id - ${Id} has updated. New data is ${JSON.stringify(newData)}`)
        } else next(`User not found for Updateing`)
    }

}

module.exports = async () => {
    try {
        const {
            Users
        } = await require('../app_init/dal_service_init')();
        return {
            userController: new UserController(Users),
        }
    } catch (error) {
console.log(error, 474747474)
        // if (error.message === "db connect error") {
        //     throw new Error('db connect error')
        // }
    }
}