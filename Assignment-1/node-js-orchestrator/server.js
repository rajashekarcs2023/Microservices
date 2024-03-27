


var restify = require('restify');
var request = require('request');
var url = require('url');

var server = restify.createServer();
server.listen(20000, function(){
	console.log('%s listening at %s', server.name, server.url);
});

/*
binding the api calls to the api server implemented in node.js

*/


server.get('/node', node1);
server.get('/python', python1);
server.get('/spark', spark1);



function node1(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.setHeader('content-type', 'application/json');
	res.writeHead(200);


	
	
	
	var ms1 =" http://localhost:3000/api/books";
	
	var myurl = ms1 ;

	request(myurl, function(error, response, body){
		res.write(body);
		res.end();
		return next();
	});
}


function python1(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.setHeader('content-type', 'application/json');
	res.writeHead(200);


	
	
	
	var ms1 ="http://127.0.0.1:5000/";
	
	var myurl = ms1 ;

	request(myurl, function(error, response, body){
		res.write(body);
		res.end();
		return next();
	});

}


function spark1(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.setHeader('content-type', 'application/json');
	res.writeHead(200);


	
	
	
	var ms1 ="http://localhost:4567/hello";
	
	var myurl = ms1 ;

	request(myurl, function(error, response, body){
		res.write(body);
		res.end();
		return next();
	});



}





