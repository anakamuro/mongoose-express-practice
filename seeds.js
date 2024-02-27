const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
  console.log('Connection OK!!!')
})
.catch(err=> {
    console.log('Connection error!!!');
    console.log(err);
})

// const p = new Product({
//     name: 'ruby grapefruit', 
//     price: 1.98, 
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p);
// }).catch(e => {
//     console.log(e);
// })

const seedProducts = [
    {
        name: 'tomato', 
        price: .98, 
        category: 'vegetables'
    },
    {
        name: 'melon', 
        price: 4.8, 
        category: 'fruits'
    },
    {
        name: 'water melon with no seeds', 
        price: 3.8, 
        category: 'fruits'
    },
    {
        name: 'organic ceroli', 
        price: 1.98, 
        category: 'vegetables'
    },
    {
        name: 'coffee milk', 
        price: 2.98, 
        category: 'milk products'
    }
];

Product.insertMany(seedProducts)
.then(res => {
        console.log(res);
    }).catch(e => {
        console.log(e);
    })