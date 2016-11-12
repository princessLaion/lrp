var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);//first param was module, next was the DB
var bodyParser = require('body-parser');
/* Initial code to verify that the server.js is working
app.get('/', function(req, res) {
	res.send('Hello world from server.js');
});
*/
//static means HTML and css, javascript. 
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res){
    db.contactlist.find(function(err, docs){
		res.json(docs); //respond by sending json format that the controller can use
	});
});

app.post('/contactlist', function(req, res){
	console.log(req.body); //need body parser
	db.contactlist.insert(req.body, function(docs){ //docs represent the item that we parse and receive
		res.json(docs);//send the data back to controller
	});
});

app.delete('/contactlist/:id', function(req, res) {
	var id = req.params.id;
	db.contactlist.remove({_id:mongojs.ObjectId(id)}, function(err, docs){
		res.json(docs);
	});
}); 

app.get('/contactlist/:id', function(req, res){
	var id = req.params.id;
	db.contactlist.findOne({_id:mongojs.ObjectId(id)}, function(err, docs){
		console.log('server log findOne: ' + docs);
		res.json(docs);
	});
});

app.put('/contactlist/:id', function(req, res){
	var id = req.params.id;
	db.contactlist.findAndModify({query:{_id:mongojs.ObjectId(id)}, 
		update:{$set:{name:req.body.name, email: req.body.email, number:req.body.number}},
		new: true},
		function(err, docs){			
			res.json(docs);
	});
});

app.listen(3000);
console.log('Server running on port 3000');