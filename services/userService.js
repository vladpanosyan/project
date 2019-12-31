const AppError = require('./../HELPERS/ErrorHandling/AppError');
const JWT = require('./../HELPERS/utils/JWT')

// const {
//     UserExistsError
// } = require('../HELPERS/ErrorHandling/UserError')

class Users {
    constructor(userDal) {
        this.userDal = userDal
    }
    async createUser(data) {
        try {
            let user = await this.userDal.createData(data)
            if (user) {
                const payload = {};
                ({id: payload.id, firstName: payload.firstName, lastName: payload.lastName} = user);
                const tokenObj = new JWT(payload, {expiresIn: 60 * 60});
                const token = tokenObj.createToken();
                user.token = token;
                return user
            } else {
                console.log(user, 55555555555)
            }
            
        } catch (error) {   
            console.log(error.message, "from-> userService")
            throw new AppError(error.message, error)
        }
    }
    
    async getAllUsers() {
        let user = await this.userDal.getAll()
        if (user) {

            return user
        } else {
            // errorLog('user not foud')// es error@ catch e linum routneri mej
            throw new Error('USER NOT EXIST')
        }
    }

    async getUserById(id) {
        let user = await this.userDal.getByUserId(id)
        return user;
    }

    async getUserByEmail(data) {
        let user = await this.userDal.getUserByEmail(data)
        if(user) {
            const payload = {};
            ({id: payload.id, firstName: payload.firstName, lastName: payload.lastName} = user);
            const tokenObj = new JWT(payload, {expiresIn: 60 * 60});
            const token = tokenObj.createToken();
            user.token = token;
            delete user.password;
            return user;
        }
        return;
    }

    async deleteById(id) {
        let deletedUser = await this.userDal.deleteUser(id)
        if (deletedUser) {
            return deletedUser
        } else {
            errorLog('user not found for deleting')
        }
    }
    async updateUserById(id, data) {
        let updatedUser = await this.userDal.updatedUser(id, data)
        if (updatedUser) {
            return updatedUser
        } else errorLog('user not found for Updateing')
    }
}

module.exports = Users