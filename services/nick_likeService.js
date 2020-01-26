class Nick_likes {
    constructor(nick_likeDal) {
        this.nick_likeDal = nick_likeDal
    }

    async addLike(nicknameId, questionId) {
        // console.log(this.nick_likeDal, 555)
        this.nick_likeDal.addLike({nicknameId, questionId})
    }
    
    deleteLike(nicknameId, questionId) {
        this.nick_likeDal.deleteLike({nicknameId, questionId})
    }
}

module.exports = Nick_likes;