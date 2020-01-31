const AppError = require('./../HELPERS/ErrorHandling/AppError')
const { 
    userValidation,
    userLoginValidation,
    userSendMailValidation
} = require('./../HELPERS/validation/userValidation')

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
    
    async userLogin(request, response, next) {
        // const { username, password } = request.body;
        try {
            const loginData = request.body;
            const isValidLoginData = userLoginValidation(loginData);
            if(isValidLoginData.error === null) {
                const user = await this.userService.getUserByEmail(loginData);
                if(user) {
                    response.json(user);
                } else {
                   throw new Error('invalid login data') 
                }
            } else {
                response.json({
                    loginData: 'Not Valid'
                })
            }
        } catch (error) {
            console.log(error.message, 2000000000)
            response.status(501).json({
                userData: 'login data incorrect'
            })
        }
    }

    // check token 

    checkTokenValid(request, response) {
        const { accessToken } = request.body;
        const isValid = this.userService.checkTokenValid(accessToken);
        response.status(200).send(!!isValid);
    }

    async getUsersById(request, response, next) {
        const Id = request.params.id
        const user = await this.userService.getUserById(Id)
        console.log('inside cuserController', 3636)
        if (user) {
            response.status(200).json(user)
        } else next('User not found for get')
    }

    // check FC auth login
    async facebookAuthCheck(request, response, next) {
        if ( !request.user) {
            response.send(401, 'user not found Bro')
        }
        const payload = {
            id: request.user.id,
            firstName: request.user.firstName,
            lastName: request.user.lastName
        }
        const access_token = this.userService.generateTokenForSocila(payload);
        request.user.access_token = access_token;
        response.json(request.user);
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

    // send email to ...
    async sendMail(request, response) {
        const {email, url} = request.body;
        const isValidEmailadresse = userSendMailValidation(email);
        const notNullableValues = isValidEmailadresse.value.filter(item => item)

        if (!isValidEmailadresse.error ) {
            const result = await this.userService.sendMail(email, url);
            response.json({result});
        } else if (isValidEmailadresse && notNullableValues.length) {
            const result = await this.userService.sendMail(notNullableValues, url);
            response.json({result, message: 'You have some false email Adress format'});
        } else {
            response.status(402).send({sueccess: 'not valid email adresses'})
        }
    }
}

module.exports = UserController
