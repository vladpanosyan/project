class Users {
    constructor(userDal) {
        this.userDal = userDal
    }
    async createUser(data) {
        let user = await this.userDal.createData({email: 'ghgh@mail.ru', firstName: 'vlod', lastName: 'ccc', img: "kkkkkk"})
        if (user) {
            return user
        } else {
            errorLog('user not creted')
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
    async deleteById(id) {
        let deletedUser = await this.userDal.deleteUser(id)
        if(deletedUser) {
            return deletedUser
        } else {
            errorLog('user not found for deleting')
        }
    }
    async updateUserById(id, data) {
        let updatedUser = await this.userDal.updatedUser(id, data)
        if(updatedUser) {
            return updatedUser
        } else errorLog('user not found for Updateing')
    }
}

module.exports = Users