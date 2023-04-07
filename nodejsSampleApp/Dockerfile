FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

# Copy from current directory to /usr/src/app
COPY . .

EXPOSE 8080

ENTRYPOINT [ "npm", "start" ]