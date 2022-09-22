var express = require('express');
var clientModel = require.main.require('./model/client-model');
var router = express.Router();


router.get('/', (req, res)=>{
	res.render('addProduct/index');
});


router.post('/', (req, res)=>{
	
	var user ={
		category : req.body.category,
		subcategory : req.body.subcategory,
		brand : req.body.brand,
		review : req.body.review,
		cost : req.body.cost
	
	};
	
	        clientModel.insertProduct(user, function(success){
		        if(success){
			        res.redirect('/home');
		        }else{
			        res.render('addProduct/index');
		        }
	        });
		
});


module.exports = router;