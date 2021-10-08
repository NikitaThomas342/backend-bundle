const router = require('express').Router()
const passport = require('passport')

router.post('/login',(req,res,next)=>{
    console.log('logging in..')
    next()
},passport.authenticated('local',{
    successRedirect: '/success',
    failureRedirect: '/fail'
}))

module.exports = router