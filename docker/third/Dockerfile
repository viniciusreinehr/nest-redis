FROM node:14

WORKDIR /third/app

COPY . /third/app

RUN chown -R node:node /third/app

USER node

RUN yarn

CMD [ "yarn", "start:dev", "third" ]
