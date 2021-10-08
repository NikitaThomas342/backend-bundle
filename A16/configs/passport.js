const passport = require('passport')
const localStrategy = require('passport-local').Strategy

passport.use(new localStrategy((username,password,done)=>{
    if(username == 'admin' && password =='test'){
        let user = {
            user_id:1,
            first_name:'Admin',
            last_name:'Super'
        }
        return done(null,user)
    }else{
        return done(null,false,{message:'Incorrect password.'})
    }
}))

passport.serializeUser((user, done) => {
    console.log('serialize user')
    done(null,user)
})

passport.deserializeUser((user, done) => {
    console.log('deserialize user')
    done(null,user)
})