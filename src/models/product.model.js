const mongoose = require('mongoose')

const productModel = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Product', productModel)