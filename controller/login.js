var express = require('express');
var clientModel = require.main.require('./model/client-model');
var mysql = require('mysql');
var router = express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{
	var user ={
		uname : req.body.uname,
		password : req.body.password
	};
	
	clientModel.validate(user, function(result){
		if(result.length > 0){
			req.session.name = req.body.uname;
			req.session.uid = result[0].id;
			req.session.type = result[0].type;
			
			console.log(result[0]);
			res.redirect('/home');
        }
		else{
			res.render("login/index");
		}
	});
});
module.exports = router;