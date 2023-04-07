Docker image creation:
docker build -t k8slearning .

Docker container run:
docker run -p 8080:8080 -d --name hello hello-world-nodejs 