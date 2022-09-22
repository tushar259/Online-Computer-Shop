var express = require('express');
var clientModel = require.main.require('./model/client-model');
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
					res.render('deleteProduct/index', user);
				}
			});	
		 }

	
});	
router.post('/', (req, res)=>{
	var user={
		uid: req.body.uuid
	};
	clientModel.deleteProduct(user, function(success){
		if(success){
			res.redirect('/deleteProduct');
		}else{
			res.redirect("/deleteProduct");
		}
	});
});



module.exports = router;