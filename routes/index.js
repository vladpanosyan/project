module.exports = async() => {
    const userRouter     = await require('./user')()
    const portalRouter   = await require('./portal')()
    const nicknameRouter = await require('./nickname')()
    const questionRouter = await require('./queston')()  
    const answerRouter   = await require('./answer')()  

    return {
        userRouter,
        portalRouter,
        nicknameRouter,
        questionRouter,
        answerRouter
    }
}