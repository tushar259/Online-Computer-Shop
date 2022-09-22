//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var exSession = require('express-session');
var home	= require('./controller/home');
var signup	= require('./controller/signup');
var adminSignup	= require('./controller/adminSignup');
var login	= require('./controller/login');
var deleteUser	= require('./controller/deleteUser');
var addProduct	= require('./controller/addProduct');
var deleteProduct	= require('./controller/deleteProduct');
var productCategory	= require('./controller/productCategory');
var addToCart	= require('./controller/addToCart');
var deleteReview	= require('./controller/deleteReview');
var cart	= require('./controller/cart');
var buy	= require('./controller/buy');
var logout	= require('./controller/logout');


var app  	= express();
var port 	= 3000;

//CONFIGURATION
app.set('view engine', 'ejs');

//Set path to views.
app.set('views', './views');

//public directory.
app.use(express.static('./public'));

//MIDDLEWARES
app.use(exSession({secret: 'my top secret code', saveUninitialized: true, resave: false}));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/home', home);
app.use('/signup', signup);
app.use('/adminSignup', adminSignup);
app.use('/login', login);
app.use('/deleteUser', deleteUser);
app.use('/addProduct', addProduct);
app.use('/deleteProduct', deleteProduct);
app.use('/productCategory', productCategory);
app.use('/addToCart', addToCart);
app.use('/deleteReview', deleteReview);
app.use('/cart', cart);
app.use('/buy', buy);
app.use('/logout', logout);



//ROUTES
app.get('/', (req,res)=>res.send('hello..'));

app.use( (req,res)=>res.send('PAGE NOT FOUND..'));





//SERVER STARTUP
app.listen(port, ()=>console.log('server started at'+port+"..."));