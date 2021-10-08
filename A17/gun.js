const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');


passport.use(new LocalStrategy((username, password, done) => {

    connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results, fields) => {
        if(err) throw err;
        if(results.length === 1) {
            done(null, results[0]);
        } else {
            console.log(err);
            done(null, false)
        }
        console.log(results);
    });

    console.log('using local strategy...');
    // if(username == userInfo.username && password == userInfo.password) {
    //     let user = {
    //         user_id: 1,
    //         first_name: 'Admin',
    //         last_name: 'Super'
    //     }
    //     return done(null, user);
    // }else {
    //     console.log("Incorrect password.");
    //     return done(null, false, {message: 'Incorrect password.'});
    // }
}));

const ppjwt = require('passport-jwt');
const JWTStrategy = ppjwt.Strategy;
const ExtractJWT = ppjwt.ExtractJwt;

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'test_authen'
}, (jwtPayload, cb) => {
    return cb(null,jwtPayload);
}));