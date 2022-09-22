var express = require('express');
var clientModel = require.main.require('./model/client-model');
var router = express.Router();





router.get('/:id', (req, res)=>{
	var user={
		pid: req.params.id,
		uid: req.session.uid,
		email: req.session.name,
		type: req.session.type,
		
	};
	clientModel.getProductForCart(user, function(result){
		if(result.length > 0){
			
			req.session.pid = result[0].id;
			req.session.pcategory = result[0].category;
			req.session.psubcategory = result[0].subcategory;
			req.session.pbrand = result[0].brand;
			var users={
				pid: req.session.pid,
				pcategory: req.session.pcategory,
				psubcategory: req.session.psubcategory,
				pbrand: req.session.pbrand,
				uid: req.session.uid
				
			};
			clientModel.insertIntoCart(users, function(success){
				if(success){
			        //console.log(result[0]);
			        res.redirect('/home');
				}
				else{
					res.redirect('/homes');
				}
			});
        }
		else{
			res.render("login/index");
		}
	});
});	
router.post('/', (req, res)=>{
	
});



module.exports = router;