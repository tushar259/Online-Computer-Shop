var express = require('express');
var clientModel = require.main.require('./model/client-model');
var mysql = require('mysql');
var router = express.Router();


router.get('/', (req, res)=>{
	var users={
		uid: req.session.uid
	};
	clientModel.getProductFromCart(users, function(result){
		if(result.length>0){
			var user={
				uid: req.session.uid,
				type: req.session.type,
				pList: result
				
			};
			
			res.render('cart/index' , user);
		}
	});
});

router.post('/', (req, res)=>{
	var user={
		uid: req.body.uuid
	};
	clientModel.getProductFromCarts(user, function(result){
		if(result.length > 0){
			
			req.session.cid = result[0].id;
			req.session.pid = result[0].productid;
			req.session.pcategory = result[0].category;
			req.session.psubcategory = result[0].subcategory;
			req.session.pbrand = result[0].brand;
			var users={
				cid: req.session.cid,
				pid: req.session.pid,
				pcategory: req.session.pcategory,
				psubcategory: req.session.psubcategory,
				pbrand: req.session.pbrand,
				uid: req.session.uid
				
			};
			clientModel.insertIntoBuy(users, function(success){
				if(success){
					var userz={
						ccid: req.session.cid
					};
					clientModel.deleteFromCart(userz, function(success){
						if(success){
							//console.log(result[0]);
			                res.redirect('/home');
						}
						else{
							res.redirect('/homez');
						}
						
					});
				}
				else{
					res.redirect('/homes');
				}
			});
        }
		else{
			res.render("homie/index");
		}
	});
});

module.exports = router;