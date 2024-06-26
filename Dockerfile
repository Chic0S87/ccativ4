FROM node:18-alpine

ENV NODE_ENV development

USER root


RUN mkdir -p /usr/src/app/node_modules
RUN mkdir -p /usr/src/app/tmp

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]