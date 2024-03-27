FROM node:boron
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
RUN npm install amqplib
RUN npm install restify
RUN npm install request
RUN npm install url
COPY . .
EXPOSE 20000
CMD ["node","server.js",">logs"]

