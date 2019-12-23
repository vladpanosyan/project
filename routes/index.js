module.exports = async() => {
    const userRouter = await require('./user')()
    const portalRouter = await require('./portal')()
    const nicknameRouter = await require('./nickname')()
    return {
        userRouter,
        portalRouter,
        nicknameRouter
    }
}