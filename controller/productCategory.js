var express = require('express');
var clientModel = require.main.require('./model/client-model');
var mysql = require('mysql');
var router = express.Router();





router.get('/', (req, res)=>{
	var type = req.session.type;

		 if(type==null)
		 {
		 	res.redirect('/home');
		 }
		 else
		 {
		 		clientModel.getProductList(function(results){
				if(results.length > 0){
					
					var user = {
						uname: req.session.name,
						uid: req.session.uid,
						type: req.session.type,
						pList: results
					};
					res.render('productCategory/index', user);
				}
			});	
		 }
	
});	
router.post('/', (req, res)=>{
	var user={
		uname: req.session.name,
		uid: req.session.uid,
		type: req.session.type,
		category: req.body.category,
		subcategory: req.body.subcategory,
		brand: req.body.brand
		
	};
	
	clientModel.getProductByCatList(user, function(results){
	    if(results.length > 0){
			
			    var user={
				    pList: results
				
			    };
			
			    res.render('listByCategory/index', user);
		    
		
	    }
	});
	
});



module.exports = router;