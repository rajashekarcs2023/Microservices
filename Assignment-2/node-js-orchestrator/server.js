
var restify = require('restify');
var request = require('request');
var url = require('url');

//rabbitmq



//rabbitmq
var server = restify.createServer();
server.listen(20000, function(){
	console.log('%s listening at %s', server.name, server.url);
});

/*
binding the api calls to the api server implemented in node.js

*/

server.get('/rabbitmq', rabbit);
server.get('/node', node1);
server.get('/python', python1);
server.get('/spark', spark1);


server.get(/.*/, restify.plugins.serveStatic({
	 directory: __dirname,
	'default': 'index.html'
}));



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


function rabbit(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.setHeader('content-type', 'application/json');
	res.writeHead(200);


var amqp = require('amqplib/callback_api');

amqp.connect('amqp://127.0.0.1', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'rpc_queue';

    ch.assertQueue(q, {durable: false});
    ch.prefetch(1);
    console.log(' [x] Awaiting RPC requests');
    ch.consume(q, function reply(msg) {
      var n = parseInt(msg.content.toString());

      console.log(" [.] fib(%d)", n);

      var r = fibonacci(n);

      ch.sendToQueue(msg.properties.replyTo,
        new Buffer(r.toString()),
        {correlationId: msg.properties.correlationId});

      ch.ack(msg);
    });
  });
});

function fibonacci(n) {
  if (n == 0 || n == 1)
    return n;
  else
    return fibonacci(n - 1) + fibonacci(n - 2);
}
}
