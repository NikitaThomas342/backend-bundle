const newCake = (req, res, next) => {
    res.status(201);
    res.json({message: "POST a new cake is " + req.body.name
    +"  "+"Description:"+ req.body.description +" "
    +"Ingredient:" + req.body.ingredient});
    console.log(req)
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

module.exports = {
    newCake, getAllCake, deleteAllCake, getOneCake, deleteOneCake
};