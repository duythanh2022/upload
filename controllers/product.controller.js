const product = require('../models/product')

const productController = {
    createProduct: async (req, res) => {
        try {
            const data = await product.create({
                name: req.body.name,
                img:req.file.path
            })
            console.log("thth",data)
        } catch (err) {
            res.status(500).json(err)
            console.log('Error ' + err.message );

        }
    }
}
module.exports = productController