var express = require('express');
var router = express.Router();
var util = require('util');
var mongoose = require('mongoose');
var address = process.env.MONGO_PORT_27017_TCP_ADDR || "localhost";
var port = process.env.MONGO_PORT_27017_TCP_PORT || "27017";
var show = mongoose.connect('mongodb://'+address+':'+port+'/address_book');
var User = require('./models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title: "The first app"});
});

router.get('/add',function(req, res, next){
	res.render('add',{title: "Add"});
})

router.post('/add', function(req, res, next){
	var new_user = new User({
		name: req.body.name,
		phone: req.body.num
	});
	new_user.save(function(err){
		if(err){
			console.log(err)
		}
		else{
			res.send('User added successfully')
		}
	})
})

router.get('/retrieve',function(req, res, next){
	User.find({},function(err, users){
		if (err)
			throw err;
		res.render('display',{users: users, title: "Display all"});
	})
})
module.exports = router;
