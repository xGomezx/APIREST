const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const productsRouts = require('./routes/product.routes.js')

const app = express();
const port = process.env.PORT || 9000;

// middleawre
app.use(express.json())
app.use('/api', productsRouts)


// routes

app.get('/', (req, res) =>{
    res.send('Welcome to my API')
})

// mongobd connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('connected to MongoDB Atlas'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('Server listening on port',port));

