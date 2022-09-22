var express = require('express');
var clientModel = require.main.require('./model/client-model');
var mysql = require('mysql');
var router = express.Router();


router.get('/', (req, res)=>{
	var users={
		uid: req.session.uid
	};
	clientModel.getProductFromBuy(users, function(result){
		if(result.length>0){
			var user={
				uid: req.session.uid,
				type: req.session.type,
				pList: result
				
			};
			
			res.render('buy/index' , user);
		}
	});
});



module.exports = router;