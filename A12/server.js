const express = require('express');
const routes = require("./routes/cake");

const app = express();

app.use(express.json());
app.use('/',routes);

app.get('/test',(req,res,next) => {
    res.send('ok');
},(req,res,next) => {
    console.log('the next() is called');
})

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is running on port' + listener.address().port);
})