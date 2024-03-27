FROM python:3
COPY . /app
WORKDIR /app
RUN pip install pika
EXPOSE 5000 
ENTRYPOINT ["python"]
CMD ["receiver_rpc.py",">logs_python.txt"]



