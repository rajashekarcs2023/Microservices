var express = require('express');
//object to represent express
var app = express();


var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre = require('./models/genre.js')
Book = require('./models/book.js')

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;


// Handle get requests, http requests for the home page
app.get('/', function(req, res){
	res.send('');
});

//python flask microservice
app.get('http://127.0.0.1:5000/', function(req,res){
	res.send('');
});

//java spark microservice
app.get('http://localhost:8080/', function(req,res){

});


app.get('')
app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	});

});


app.post('/api/genres', function(req, res){
	var genre = req.body;
	// allows us to access the form and put into genre
	Genre.addGenre(genre, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});

});


app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
		if(err){
			throw err;
		}
		res.json(books);
	});

});

app.get('/api/books/:_id', function(req, res){
	Book.getBookById(req.params._id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});

});
app.listen(3000);



