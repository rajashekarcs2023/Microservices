# MethkupalliVasanth
 
Assignment-1, related technologies and commands to execute them.

## Architecture 

![alt text](https://github.com/airavata-courses/MethkupalliVasanth/blob/master/Assignment-1/architecture-diagram/Arch.PNG)


## Technologies Used:

JavaScript (Node.js)
JAVA (Spark Java)
PYTHON (Flask)

## Requirements:

1. Install MongoDB, start the daemon mongod, which is essential for the microservices accessing the mongodb. Download the csv files from
   > https://github.com/airavata-courses/MethkupalliVasanth/tree/master/Assignment-1/data-mongo. 
   
   
Create a database named bookstore in MongoDB cd into the mongo-db file directoryand run the following commands to import the collections
   > $ mongoimport --db bookstore --collection books  --type csv --file book.csv --headerline
   
   
   > $ mongoimport --db bookstore --collection genres --type csv --file genre.csv --headerline
 
2. Install Node.js
3. Install Python 2.7.x, the latest Flask version and the pymongo dependency.
4. Install maven for running SparkJava Microservice.

## Testing the Architecture and the individual microservices:

1. Clone the Repository 

### Running the node.js Orchestrator service
1. Go to the node-js-orchestrator folder and run the following command
> node server.js

You can test it at 

> http://localhost:20000/


2. Before you access the microservices from the UI, start the individual microservices first.

3. After starting the individual microservices, open the index.html page, it has all the links for accessing the individual microservices.

### Running the node.js microservice
1. Go to node-js-service folder and run the following command

> node app.js

You can test it by accessing the service from the orchestrator above.

Also, you can check this at 

> http://localhost:20000/node

Which shows us the database of books from the MongoDB

### Running the Spark Java microservice.

1. Go to the java spark folder in the repository and run the following maven commands
> mvn clean install package

> cd target

> java -jar demo-0.0.1-SNAPSHOT.jar

You can check the functioning of the the microservice from the orchestrator. Or use the link below
http://localhost:20000/spark

Returns a hello vasanth message 

### Running the Python Flask microservice
1. We need to install flask-pymongo. Activate your virtual environment and run the following commands.

> $ pip install Flask-PyMongo

2. Go to the python-microservice folder and run the following commands

> python app.py

Check the functioning of the microservice from the orchestrator or use the link 

> http://localhost:20000/python
 

Returns a simple hello message.



# References

    i. https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask
    ii. http://sparkjava.com/documentation
    iii. https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
    iv. https://www.nginx.com/blog/introduction-to-microservices/


