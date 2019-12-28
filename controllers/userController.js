const AppError = require('./../HELPERS/ErrorHandling/AppError')
const userValidation = require('./../HELPERS/validation/userValidation')

class UserController {
    constructor(userService) {
        this.userService = userService
    }
    // find
    async showResult(request, response, next) {
        
        try{
            console.log(32323232323, 'in controller')
            let users = await this.userService.getAllUsers()
            response.json({ users: users })
        }
        catch(e) {
            console.log(e.message, 15551515151515) /// amena lav error handlingi tex@
            next(new AppError('wtf', e))
        }
    }

    //create 
    async createUser(request, response, next) {
        try {
            const user = request.body;
            const isValidUserData = userValidation(request.body)
            console.log(isValidUserData.error, 210989)
    
            if(isValidUserData.error === null) {
                const userData = await this.userService.createUser(user)
                response.json(userData)
            } else {
                response.json({
                    userData: 'notvalid'
                })
            }
            
        } catch (error) {
            // next(new AppError(error.message, error))
            console.log(error.message, 5353553)
            response.status(501).json({
                userData: 'no_user_data'
            })
        }
    }
    
    async getUsersById(request, response, next) {
        const Id = request.params.id
        const user = await this.userService.getUserById(Id)
        if (user) {
            response.status(200).json(user)
        } else next('User not found for get')
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
module.exports = UserController

// module.exports = async () => {
//     try {
//         // const { Users } = await require('../app_init/dal_service_init')();
//         const { Users } = await require('./index')();

//         return {
//             userController: new UserController(Users),
//         }
//     } catch (error) {
// console.log(error.message, 474747474)
//         // if (error.message === "db connect error") {
//         //     throw new Error('db connect error')
//         // }
//         throw new Error('Connection error "from -> userController"')
//     }
// }