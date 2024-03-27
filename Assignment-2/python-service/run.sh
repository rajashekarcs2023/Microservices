#!/bin/bash

sudo docker rm -f app_python
sudo docker rmi msp

sudo docker build -t msp .

sudo docker run -d -p 5000 --net="host" --name app_python  msp
