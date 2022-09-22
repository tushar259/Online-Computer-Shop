var express = require('express');
//var mysql = require('mysql');
var router = express.Router();

router.get('/', (req, res)=>{
	req.session.uid = null;
	req.session.type = null;
	req.session.cid = null;
	req.session.pid = null;
	req.session.pcategory = null;
	req.session.psubcategory = null;
	req.session.pbrand = null;
	req.session.name = null;
	res.redirect('/home');

});

module.exports = router;