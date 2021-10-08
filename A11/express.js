const express = require('express')
const app = express()

app.use(express.json())

const listener = app.listen(process.env.PORT || 8080,() => {
    console.log(`App is running on port` +listener.address().port)
})