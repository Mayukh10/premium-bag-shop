const express = require('express');
const app = express();
const userModel = require('./models/user-model');
const productModel = require('./models/product');
const ownwerModel = require('./models/owner-model');
const path = require('path');
const db = require("./config/mongoose-connection")
const cookieParser = require('cookie-parser');
const ownerRoutes = require('./routes/ownerRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');

app.use('/owner', ownerRoutes);
app.use('/product', productRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => {

    console.log("server is Running on Port:3000");
})
