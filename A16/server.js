const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const auth = require('./routes/auth')

require('./configs/passport')

const app = express()
app.set('view engine','ejs')
app.use(express.json())
app.use(cookieParser())
app.use(session({secret:'test_authen',resave:true,saveUninitialized:true}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', auth)

app.get('/success',(req,res)=>{
    res.render('success')
})

app.get('/fail',(req,res)=>{
    res.render('fail')
})

app.get('/home',isLoggedIn,(req,res)=>{
    res.end('home')
})

var isLoggedIn = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    }else{
        console.log('no logged in')
        res.redirect('/fail')
    }
}

const listener = app.listen(3000,()=>{
    console.log('App is running on port ' + listener.address().port)
})