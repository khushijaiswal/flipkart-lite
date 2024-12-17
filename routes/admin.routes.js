const { addProduct, updateProduct, deleteProduct, getProduct, fetchAdminOrders, adminUpdateOrderStatus, adminUserFetch, adminBlockUnblockUser } = require('../controllers/admin.controller')

const router = require('express').Router()

router
    .post("/product/add", addProduct)
    .put("/product/update/:_id", updateProduct)
    .delete("/product/delete/:_id", deleteProduct)
    .get("/product", getProduct)
    .get("/adminOrders", fetchAdminOrders)
    .put("/order/update-status/:oid", adminUpdateOrderStatus)
    .get("/user/fetch", adminUserFetch)
    .put("/user/block/:uid", adminBlockUnblockUser)

module.exports = router