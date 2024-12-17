const { registerAdmin, loginAdmin, logoutAdmin, loginCustomer, logoutCustomer, registerCustomer } = require('../controllers/auth.controller')

const router = require('express').Router()

router
    .post("/admin/register", registerAdmin)
    .post("/admin/login", loginAdmin)
    .post("/admin/logout", logoutAdmin)
    .post("/login", loginCustomer)
    .post("/logout", logoutCustomer)
    .post("/register", registerCustomer)

module.exports = router
