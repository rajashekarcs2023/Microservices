sudo docker build -t ms2 .

sudo docker run -it -p 5000 --net="host" --name app_2  ms2
