const express = require('express')
const productModel = require('../models/product.model')

const router = express.Router()


// create user
router.post('/products', (req, res) =>{
    const product = productModel(req.body);

    product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
})

// get all products
router.get('/products', (req, res) =>{

    productModel
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
})

// get a product
router.get('/products/:id', (req, res) =>{
    const {id} = req.params;
    productModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
})

// update a product
router.put('/products/:id', (req, res) =>{
    const {id} = req.params;
    const{name,category,price,stock} = req.body;
    productModel
    .updateOne({_id:id}, { $set:{name, category, price, stock} })
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
})

// delete a product
router.delete('/products/:id', (req, res) =>{
    const {id} = req.params;
    productModel
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
})

module.exports = router;