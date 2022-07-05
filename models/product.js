const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({ 
    name: {
      _id: mongoose.Schema.Types.ObjectId,
      type: String,
      required: true,
    },
    img:{
        type: Array,
        data:Buffer
    }
})
module.exports = mongoose.model('Product', productSchema);