module.exports = (passport) => (request, response, next) => {
    // console.log(passport, 22222222222222222)
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
        if(err) {
            console.log(err, 747474747747)
        }
        if (info) {
            console.log(info.message, 838183)
            response.send(info.message)
        } else {
            console.log('user found in db from route')
            
            next();
        }
    })(request, response, next)
}