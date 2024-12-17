const { getPublicProduct, getPublicProductDetails } = require('../controllers/public.controller')

const router = require('express').Router()

router
    .get("/products", getPublicProduct)
    .get("/product-details/:productId", getPublicProductDetails)  // productId  => params mein likha tha=> req.param.productId

module.exports = router