const router = require('express').Router();
const productController = require('../controllers/product.controller')
const upload = require('../middlewares/upload')
router.post("/upload",upload.single("files"),productController.createProduct)

module.exports = router;