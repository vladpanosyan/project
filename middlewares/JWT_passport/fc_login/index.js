
module.exports = (passport) => {
    return {
        // facebookNavigate () {
        //     console.log(44444444444444444444)
        //         return passport.authenticate('facebook', {scope: ['email'], session: false})
        // },
        // facebookCheck() {
        // console.log(22222222222222222)
        //    return passport.authenticate('facebook', {
        //         // successRedirect: false
        //         session: false,
        //         failureRedirect: "/api/users/login"
        //     })
        // }, 
        facebookAuthCheck() {
           return passport.authenticate('facebook-token', {
                // successRedirect: "/api/users/register",
                session: false
            })
        }
    }
}

