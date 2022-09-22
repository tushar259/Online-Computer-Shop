var db = require('./db');

module.exports={
	getProducts: function(callback){
		var sql = "select * from product";
		db.getResult(sql, function(results){
			callback(results);
		});
	}, 
	userSignup: function(user, callback){
		var sql = "insert into user values (null, '"+user.email+"','"+user.password+"','"+user.type+"',"+user.balance+")";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	checkPasscode: function(user, callback){
		var sql = "select * from passcode where id="+user.passcode;

		db.getResult(sql, function(result){
			callback(result);
		});
	},
	adminSignup: function(user, callback){
		var sql = "insert into user values (null, '"+user.email+"','"+user.password+"','"+user.type+"',"+user.balance+")";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	validate: function(user, callback){
		var sql = "select * from user where email='"+user.uname+"' and password='"+user.password+"'";

		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getUserList: function(callback){
		var sql = "select * from user where type='user'";

		db.getResult(sql, function(result){
			callback(result);
		});
	},
	deleteUser: function(user, callback){
		var sql = "delete from user where id="+user.uid;
		db.execute(sql, function(status){
			callback(status);
		});
	},
	insertProduct: function(user, callback){
		var sql = "insert into product values (null, '"+user.category+"','"+user.subcategory+"','"+user.brand+"','"+user.review+"',"+user.cost+")";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	getProductList: function(callback){
		var sql = "select * from product";

		db.getResult(sql, function(result){
			callback(result);
		});
	},
	deleteProduct: function(user, callback){
		var sql = "delete from product where id="+user.uid;
		db.execute(sql, function(status){
			callback(status);
		});
	},
	getProductByCatList: function(user, callback){
		
		if(user.subcategory=="all" && user.brand=="all"){
			var sql = "select * from product where category='"+user.category+"'";

		    db.getResult(sql, function(result){
			    callback(result);
		    });
		}
		else if(user.subcategory=="all"){
			var sql = "select * from product where category='"+user.category+"' and brand='"+user.brand+"'";

		    db.getResult(sql, function(result){
			    callback(result);
		    });
		}
		else if(user.brand=="all"){
			var sql = "select * from product where category='"+user.category+"' and subcategory='"+user.subcategory+"'";

		    db.getResult(sql, function(result){
			    callback(result);
		    });
		}
		else{
			var sql = "select * from product where category='"+user.category+"' and subcategory='"+user.subcategory+"' and brand='"+user.brand+"'";

		    db.getResult(sql, function(result){
			    callback(result);
		    });
			
		}
		
		
	},
	getProductForCart: function(user, callback){
		var sql = "select * from product where id="+user.pid;
		db.getResult(sql, function(results){
			callback(results);
		});
	},
	insertIntoCart: function(user, callback){
		var sql = "insert into cart values (null, "+user.pid+", '"+user.pcategory+"','"+user.psubcategory+"','"+user.pbrand+"',"+user.uid+")";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	deleteReviews: function(user, callback){
		var sql = "update product set review='review deleted' where id="+user.uid;
		db.execute(sql, function(status){
			callback(status);
		});
	},
	getProductFromCart: function(user, callback){
		var sql = "select * from cart where userid="+user.uid;
		db.getResult(sql, function(results){
			callback(results);
		});
	},
	getProductFromCarts: function(user, callback){
		var sql = "select * from cart where id="+user.uid;
		db.getResult(sql, function(results){
			callback(results);
		});
	}, 
	insertIntoBuy: function(user, callback){
		var sql = "insert into buy values (null, "+user.cid+", "+user.pid+", '"+user.pcategory+"','"+user.psubcategory+"','"+user.pbrand+"',"+user.uid+")";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	deleteFromCart: function(user, callback){
		var sql = "delete from cart where id="+user.ccid;
		db.execute(sql, function(status){
			callback(status);
		});
	},
	getProductFromBuy: function(user, callback){
		var sql = "select * from buy where userid="+user.uid;
		db.getResult(sql, function(results){
			callback(results);
		});
	},
}