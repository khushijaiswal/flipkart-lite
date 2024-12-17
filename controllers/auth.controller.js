// registerAdmin
// loginAdmin
// logoutAdmin

const admin = require("../models/admin")
const customer = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")
const { sendEmail } = require("../utils/email")
require("dotenv").config()


exports.registerAdmin = async (req, res) => {
    const { email, password } = req.body
    const result = await admin.findOne({ email })
    if (result) {
        return res.status(409).json({ message: "email already registered" })
    }
    const hash = await bcrypt.hash(password, 10)
    await admin.create({ ...req.body, password: hash })
    res.json({ meassage: "register Admin success" })
}

exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body
    const result = await admin.findOne({ email })
    if (!result) {
        return res.status(401).json({ message: "invalid credentials" })
    }

    const isVerify = await bcrypt.compare(password, result.password)
    if (!isVerify) {
        return res.status(401).json({ message: "invalid credentials password" })
    }
    const token = jwt.sign({ _id: result._id }, process.env.JWT_SECRET)
    res.cookie("admin", token, {
        maxAge: process.env.MAX_AGE,
        httpOnly: true,
        // secure: true
    })

    res.json({
        meassage: "login Admin success", result: {
            _id: result._id,
            name: result.name,
            email: result.email
        }
    })
}

exports.logoutAdmin = async (req, res) => {
    res.clearCookie("admin")
    res.json({ meassage: "logout Admin success" })
}


// customerregister


exports.registerCustomer = async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await customer.findOne({ email })
        if (result) {
            return res.status(409).json({ message: "email already registered" })
        }
        const hash = await bcrypt.hash(password, 10)
        await customer.create({ ...req.body, password: hash })
        await sendEmail({
            to: email, subject: "Thank you for joining us!Fliplkart-Lite",
            message: `
            <h2>Hey, ${req.body.name}</h2>
            <h3>Thanks for joining. We’re thrilled to have you. Welcome to Fliplkart-Lite! Get ready for some amazing deals and updates right here. 😊</h3>
            `})
        res.json({ meassage: "register customer success" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "unable to register" })
    }
}
// customerlogin


exports.loginCustomer = async (req, res) => {
    const { email, password } = req.body
    const result = await customer.findOne({ email })
    if (!result) {
        return res.status(401).json({ message: "invalid credentials" })
    }

    const isVerify = await bcrypt.compare(password, result.password)
    if (!isVerify) {
        return res.status(401).json({ message: "invalid credentials password" })
    }

    if (!result.isActive) {
        return res.status(401).json({ message: "account block" })
    }
    const token = jwt.sign({ _id: result._id }, process.env.JWT_SECRET)
    res.cookie("customer", token, {
        maxAge: process.env.MAX_AGE,
        httpOnly: true,
        // secure: true
    })

    res.json({
        meassage: "login customer success", result: {
            _id: result._id,
            name: result.name,
            email: result.email
        }
    })
}
// customerlogout


exports.logoutCustomer = async (req, res) => {
    res.clearCookie("customer")
    res.json({ meassage: "logout customer success" })
}