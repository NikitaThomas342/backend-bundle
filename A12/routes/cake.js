const express = require('express');
const router = express.Router();
const cakeController = require('../controllers/cake');

router.post('/cake',cakeController.newCake);
router.get('/cake',cakeController.getAllCake);
router.delete('/cake',cakeController.deleteAllCake);

router.get('/cake/:id',cakeController.getOneCake);
router.delete('/cake/:id',cakeController.deleteOneCake);

module.exports = router;