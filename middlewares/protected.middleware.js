const jwt = require("jsonwebtoken")
const user = require("../models/user")
exports.adminprotected = async (req, res, next) => {
    const admin = req.cookies.admin
    if (!admin) {
        return res.status(401).json({ message: "no cookie found" })
    }

    jwt.verify(admin, process.env.JWT_SECRET, (err) => {
        if (err) {
            return res.status(401).json({ message: "invalid token" })
        }
        next()
    })

}

exports.customerProtected = async (req, res, next) => {
    const customer = req.cookies.customer
    if (!customer) {
        return res.status(401).json({ message: "no cookie found" })
    }

    jwt.verify(customer, process.env.JWT_SECRET, async (err, decode) => {  //decode mein wahi data ata jo humne auth.controller se bheja
        if (err) {
            return res.status(401).json({ message: "invalid token" })
        }

        const result = await user.findById(decode._id)
        if (!result.isActive) {
            return res.status(401).json({ message: "account block by admin" })
        }
        req.loggedInUser = decode._id
        next()
    })

}