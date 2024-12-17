const product = require("../models/product")

exports.getPublicProduct = async (req, res) => {
    const result = await product.find()
    res.json({ meassage: "get product success", result })

}

exports.getPublicProductDetails = async (req, res) => {
    const result = await product.findById(req.params.productId)
    res.json({ meassage: "get product detail success", result })

}