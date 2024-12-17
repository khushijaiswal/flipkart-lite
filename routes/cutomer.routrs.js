const { placeOrder, fetchCustomerOrder } = require('../controllers/customer.controller')
const router = require('express').Router()

router
    .post("/place-order", placeOrder)
    .get("/order-history", fetchCustomerOrder)

module.exports = router