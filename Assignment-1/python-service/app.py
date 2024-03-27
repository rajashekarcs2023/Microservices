#!flask/bin/python
from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
#hashed out the books implementation for now

app = Flask(__name__)

app.config['MONGO_DBNAME']='bookstore'
app.config['MONGO_URI']='mongodb://localhost:27017/bookstore'


mongo = PyMongo(app)

@app.route('/')
def get_all_books():
	#book=mongo.db.books

	#output = []
	#return collection
	#return mongo.db.bookstore
	#for a in book:
	 	#output.append({'author' : a['author'], 'create_date' : a['create_date'], 'description':a['description'], 'genre': a['genres']})
		#ouput.append({'author':a['author']})
	#return jsonify({'result':output})
	return "hello"


@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)



if __name__ == '__main__':
    app.run(debug=True)
