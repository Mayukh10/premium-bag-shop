const express = require('express');
const app = express();
const userModel = require('./models/user-model');
const productModel = require('./models/product');
const ownwerModel = require('./models/owner-model');
const path = require('path');
const db = require("./config/mongoose-connection");
const cookieParser = require('cookie-parser');
const ownerRoutes = require('./routes/ownerRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const flash = require('connect-flash');
const expressSession = require('express-session');
const upload = require('./config/multer-config');
const index = require('./routes/index');

require('dotenv').config();

app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');

app.use(expressSession({
    secret: process.env.EXPRESS_SESSION_SECRET || 'defaultSecret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));
app.use(flash());
app.use('/', index);
app.use('/owner', ownerRoutes);
app.use('/product', productRoutes);
app.use('/users', userRoutes);


app.get('/login', (req, res) => { 
    res.render('login', {error: req.flash("error")});
});

app.get('/register', (req, res) => {    
    res.render('register', {error: req.flash("error")});
});


app.get('/logout', (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
}); 

app.get('/cart', (req, res) => {
    res.render('cart');
});

app.get('/checkout', (req, res) => {
    res.render('checkout');
});

app.get('/product', (req, res) => {
    res.render('product');
});

app.get('/product-details', (req, res) => {
    res.render('product-details');
});

app.get('/wishlist', (req, res) => {
    res.render('wishlist');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/about', (req, res) => {

    res.render('about');    
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/blog-details', (req, res) => {
    res.render('blog-details');
});



app.listen(3000, () => {

    console.log("server is Running on Port:3000");
})
