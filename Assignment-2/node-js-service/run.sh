#!/bin/bash

sudo docker rm -f app_node
sudo docker rmi msn

sudo docker build -t msn .

sudo docker run -d -p 3000 --net="host" --name app_node  msn
