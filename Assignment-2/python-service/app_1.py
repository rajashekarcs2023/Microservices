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


class FibonacciRpcClient(object):
	app = None
	def __init__(self):
        	self.connection = pika.BlockingConnection(pika.ConnectionParameters(host='127.0.0.1'))

       		self.channel = self.connection.channel()
	
        	result = self.channel.queue_declare(exclusive=True)
        	self.callback_queue = result.method.queue
	
        	self.channel.basic_consume(self.on_response, no_ack=True, queue=self.callback_queue)

    	def on_response(self, ch, method, props, body):
        	if self.corr_id == props.correlation_id:
       			self.response = body

    	def call(self, n):
        	self.response = None
        	self.corr_id = str(uuid.uuid4())
        	self.channel.basic_publish(exchange='', routing_key='rpc_queue', properties=pika.BasicProperties( reply_to = self.callback_queue, correlation_id = self.corr_id,), body=str(n))
        	while self.response is None:
            		self.connection.process_data_events()
        	return int(self.response)

		fibonacci_rpc = FibonacciRpcClient()

		print(" [x] Requesting fib(30)")
		response = fibonacci_rpc.call(30)
		print(" [.] Got %r" % response)

@app.route('/python')
def action():

	a= FibonacciRpcClient(object)
	a.add_endpoint(endpoint='/python',endpoint_name='python', handler=action)
	a.run()




if __name__ == '__main__':
    app.run(debug=True)
