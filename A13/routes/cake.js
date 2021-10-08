const express = require('express');
const multer = require('multer')

const router = express.Router();
const cakeController = require('../controllers/cake');

const upload = multer()

router.post('/cake',cakeController.uploadimage,cakeController.newCake,cakeController.displayCake);

router.get('/cake',cakeController.getAllCake);
router.delete('/cake',cakeController.deleteAllCake);

router.get('/cake/:id',cakeController.getOneCake);
router.delete('/cake/:id',cakeController.deleteOneCake);

module.exports = router;