var express = require('express');
var clientModel = require.main.require('./model/client-model');
var router = express.Router();


router.get('/', (req, res)=>{
	res.render('adminSignup/index');
});


router.post('/', (req, res)=>{
	
	var user ={
		email : req.body.email,
		password : req.body.password,
		type : req.body.type,
		balance : req.body.balance,
		passcode : req.body.passcode
	
	};
	clientModel.checkPasscode(user,function(success){
		if(success.length>0){
	        clientModel.adminSignup(user, function(success){
		        if(success){
			        res.redirect('/home');
		        }else{
			        res.render('adminSignup/index');
		        }
	        });
		}
		else{
			res.render('adminSignup/index');
		}
	});
});


module.exports = router;