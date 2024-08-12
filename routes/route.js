const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

router.post('/orders', orderController.createOrder);
router.get('/ordered', orderController.getOrders);
router.get('/:name', orderController.getShoes);



module.exports = router;
