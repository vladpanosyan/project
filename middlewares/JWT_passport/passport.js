const Users = global.UserModel;

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_SECRET_KEY;

console.log(options, 201);

module.exports = (passport) => (app) => {
    app.use(passport.initialize());
    
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        console.log(501);
        try {
            Users.findOne({
                where: {
                    id: jwt_payload.id
                }
            }).then((user) => {
                if (user) {
                    console.log('user found in db in passport', 12313313)
                    done(null, user);
                } else {
                    console.log('user not found in db in passport', 2222222222)
                    done(null, false);
                }
            })
        } catch (error) {
            console.log(error.messge, 59595959999995)
            done(error)
        }
    }))
}


