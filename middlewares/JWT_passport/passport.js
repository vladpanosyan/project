const Users = global.UserModel;

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const FacebookTokenStrategy = require('passport-facebook-token');
    
// const strategy = require("passport-facebook");
// const FacebookStrategy = strategy.Strategy;

const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_SECRET_KEY;

module.exports = (passport) => (app) => {
    app.use(passport.initialize());

    // passport.serializeUser(function (user, done) {
    //     console.log(user, 3333, 'inside passport serialize')
    //     done(null, user);
    // });

    // passport.deserializeUser(function (obj, done) {
    //     console.log(user, 4444, 'inside passport deserialize')

    //     done(null, obj);
    // });

    // JWT strategy
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

    //facebook login strategy uses for server side rendering

    // passport.use(
    //     new FacebookStrategy(
    //         {
    //             clientID: process.env.FACEBOOK_CLIENT_ID,
    //             clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    //             callbackURL: "http://localhost:4200/api/users/auth/facebook/callback",
    //             profileFields: ['id', 'displayName', 'photos', 'email', 'first_name', 'last_name']
    //         },
    //         async function (accessToken, refreshToken, profile, done) {
    //             const { email, first_name, last_name } = profile._json;
    //             let user = await Users.findOrCreate({
    //                 where: { email }, defaults: {
    //                     firstName: first_name,
    //                     lastName: last_name,
    //                     img: profile._json.picture.data.url || process.env.USER_DEFAULT_IMAGE,
    //                 }
    //             });
    //             // const userData = {
    //             //   email,
    //             //   firstName: first_name,
    //             //   lastName: last_name
    //             // };
    //             user = user[0].get({ plain: true });
    //             user.access_token = accessToken
    //             // console.log(profile._json.email, profile._json.first_name,555555, 14141414141414);
    //             // console.log(profile._json.picture.data.url, 555555)
    //             done(null, user);// erb done kanchumem avtomata ashxatume fc_login/facebookCheck f(x)
    //         })
    // )

    //
    passport.use(new FacebookTokenStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        profileFields: ['id', 'displayName', 'picture.type(large)', 'email', 'first_name', 'last_name']
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            console.log(profile._json, 7402)
            const { email, first_name, last_name } = profile._json;
            let user = await Users.findOrCreate({
                attributes: ['id', 'firstName', 'lastName', 'img', 'time', 'email'],
                where: { email }, defaults: {
                    firstName: first_name,
                    lastName: last_name,
                    img: profile._json.picture.data.url || process.env.USER_DEFAULT_IMAGE,
                }
            });
            user = user[0].get({ plain: true });
            user.access_token = accessToken
            done(null, user);
        } catch (error) {
            done(error, false, error.message)
        }
    }))
}


