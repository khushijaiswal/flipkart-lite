// product crud

const Order = require("../models/Order")
const product = require("../models/product")
const user = require("../models/user")
const { sendEmail } = require("../utils/email")
const { upload } = require("../utils/upload")
const path = require("path")
const cloudinary = require("cloudinary").v2


cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME
})

exports.addProduct = async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "unable to upload" })
        }

        if (req.files) {

            // const allImages = []
            // for (const item of req.files) {
            //     const { secure_url } = await cloudinary.uploader.upload(item.path)
            //     allImages.push(secure_url)
            // }
            // console.log(allImages)

            //promise all start
            const allImages = []
            const heros = []
            for (const item of req.files) {    //loop mein kabhi bhi promises ka code nhi likhte isliye allImages ka empty array ka variable banaya
                allImages.push(cloudinary.uploader.upload(item.path))
            }
            const data = await Promise.all(allImages)
            for (const item of data) {
                heros.push(item.secure_url)
            }
            //promise all end

            await product.create({ ...req.body, productImg: heros })
            res.json({ meassage: "add product success" })
        } else {
            res.status(400).json({ message: "Product img is required" })
        }
        // console.log(req.body)
        // console.log(req.file)  //multer.single()
        // console.log(req.files)  // //multer.array()
    })
}

exports.getProduct = async (req, res) => {
    const result = await product.find()
    res.json({ meassage: "get product success", result })

}

exports.updateProduct = async (req, res) => {
    upload(req, res, async err => {
        try {
            const allImages = []
            if (req.files && req.files.length > 0) {
                // upload new image
                for (const item of req.files) {
                    const { secure_url } = await cloudinary.uploader.upload(item.path)
                    allImages.push(secure_url)
                }
            }
            const oldProduct = await product.findById(req.params._id)
            if (req.body.remove) {
                // remove image
                const result = oldProduct.productImg.filter(item => !req.body.remove.includes(item))
                oldProduct.productImg = result
                if (typeof req.body.remove === 'string') {  //req.body.remove mein string aaya to ye code run hoga (single image to remove)
                    await cloudinary.uploader.destroy(path.basename(req.body.remove, path.extname(req.body.remove)))
                } else { //req.body.remove mein array aya to ye code run hoga (multiple image to remove)
                    for (const item of req.body.remove) {
                        await cloudinary.uploader.destroy(path.basename(item, path.extname(item)))
                    }
                }
            }
            // change only data
            await product.findByIdAndUpdate(req.params._id, { ...req.body, productImg: [...oldProduct.productImg, ...allImages] })
            res.json({ meassage: "update product success" })
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: "something went wrong" })
        }
    })

}

exports.deleteProduct = async (req, res) => {
    const result = await product.findById(req.params._id)
    // step 1 delete from cloudianry
    for (const item of result.productImg) {
        await cloudinary.uploader.destroy(path.basename(item, path.extname(item)))  //path.extname(item) ==> removes extension of the item
    }
    // step 2 delete from database
    await product.findByIdAndDelete(req.params._id)
    res.json({ meassage: "delete product success" })
}

exports.fetchAdminOrders = async (req, res) => {
    const { skip, limit } = req.query
    const total = await Order.countDocuments()
    const result = await Order
        .find()
        .skip(skip)
        .limit(limit)
        .populate("customer", "name")
        .populate("products", "-__v")

    res.json({ meassage: "fetch order success", result, total })
}

exports.adminUpdateOrderStatus = async (req, res) => {
    await Order.findByIdAndUpdate(req.params.oid, { status: req.body.status })


    const x = await Order.findById(req.params.oid)
    const result = await user.findById(x.customer)
    if (req.body.status !== "placed") {
        await sendEmail({
            to: result.email,
            subject: "Our order status has been updated!",
            message: `Your order status: Now ${req.body.status}`
        })
    }
    res.json({ meassage: "order status update success" })
}

exports.adminUserFetch = async (req, res) => {
    try {
        const total = await user.countDocuments()
        const { skip, limit } = req.query
        const result = await user.find().skip(skip).limit(limit)
        res.json({ message: "user fetch success", result, total })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}

exports.adminBlockUnblockUser = async (req, res) => {
    try {
        await user.findByIdAndUpdate(req.params.uid, { isActive: req.body.isActive })
        res.json({ message: "Account block success" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}