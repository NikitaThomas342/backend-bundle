const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads')
    },
    filename: function(req,file,cb){
        var fname = file.originalname
        fs.access('./uploads/' + file.originalname, (err)=>{
            if(err){}
            else{
                fname = Date.now() + '.' + file.originalname.split('.').pop()
                console.log('fname',fname)
            }
            cb(null,fname)
        })
    }
})

const uploadimage = multer({storage: storage}).array('image')

const newCake = (req, res, next) => {
    res.status(201);
    res.json({message: "POST a new cake is " + req.body.name
    +"  "+"Description:"+ req.body.description +" "
    +"Ingredient:" + req.body.ingredient});
    next()
};

const getAllCake = (req, res, next) => {
    res.json({message: "Get all cake"});
}

const deleteAllCake = (req, res, next) => {
    res.json({message: "Delete all cake"});
}

const getOneCake = (req, res, next) => {
    res.json({message: "Get a cake id " + req.params.id});
}

const deleteOneCake = (req, res, next) => {
    res.json({message: "Delete a cake id " + req.params.id});
}

const displayCake = (req, res, next) => {
    console.log('the POSTED cake is :')
    console.table(req.body)
    next()
}

module.exports = {
    uploadimage, newCake, displayCake, getAllCake, deleteAllCake, getOneCake, deleteOneCake
};