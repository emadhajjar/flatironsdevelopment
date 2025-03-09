FROM node:16.20.1-alpine
WORKDIR /usr/src/app

COPY .. .

RUN yarn
RUN yarn api db:generate
RUN yarn api db:dev
RUN yarn api db:seed
RUN yarn start
