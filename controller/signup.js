var express = require('express');
var clientModel = require.main.require('./model/client-model');
var router = express.Router();


router.get('/', (req, res)=>{
	res.render('signup/index');
});


router.post('/', (req, res)=>{
	
	var user ={
		email : req.body.email,
		password : req.body.password,
		type : req.body.type,
		balance : req.body.balance
	
	};
	
	clientModel.userSignup(user, function(success){
		if(success){
			res.redirect('/home');
		}else{
			res.render('signup/index');
		}
	});
});


module.exports = router;