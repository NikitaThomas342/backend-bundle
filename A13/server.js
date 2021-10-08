const express = require('express');
const routes = require("./routes/cake");
const morgan = require('morgan')
const fs = require('fs')

const app = express();
const logStream = fs.createWriteStream('./access.log',{flags:'a'})
const errlogStream = fs.createWriteStream('./error.log',{flags:'a'})

app.use(express.json());
app.use('/',routes);

// for getting in postman
// localhost:3030/public/uploads/chocolage.jpg
app.use('/public/uploads', express.static('./uploads'))

//log for http request action
app.use(morgan('combined',{
    skip: (req,res)=>{
        return res.statusCode<400
    },
    stream: logStream
}))

app.use(morgan('combined',{
    skip: (req,res)=>{
        return res.statusCode>400
    },
    stream: errlogStream
}))

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is running on port' + listener.address().port);
})