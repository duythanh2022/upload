const router = require('express').Router();
const productController = require('../controllers/product.controller')
const upload = require('../middlewares/upload')
router.post("/upload",upload.array("files",10),productController.createProduct)

module.exports = router;