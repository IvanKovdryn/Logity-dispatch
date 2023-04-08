FROM node:19-alpine3.16

WORKDIR /home/logi-dispatch/app

COPY package*.json ./

RUN npm install --quiet

COPY . ./

EXPOSE 8080

CMD [ "node", "index.js" ]

