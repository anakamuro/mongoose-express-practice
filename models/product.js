const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    price: {
        type: Number, 
        required: true, 
        min: 0
    },
    category: {
        type: String, 
        required: true,
        enum: ['fruits', 'vegetables', 'milk products']
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;