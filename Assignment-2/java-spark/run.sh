#!/bin/bash


sudo docker rm -f app_java
sudo docker rmi msj

sudo docker build -t msj .

sudo docker run -d -p 4567 --net="host" --name app_java  msj
