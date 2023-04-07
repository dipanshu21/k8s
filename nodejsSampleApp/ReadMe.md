Docker image creation:
docker build -t hello-world-nodejs .

Docker container run:
docker run -p 8080:8080 -d --name hello hello-world-nodejs 